import { useEffect, useState } from 'react';
import { $api } from '../../api';
import { Pagination, PaginationProps } from 'antd';
import { AnimeList, IPagination, Title } from '../../types/anime.types.ts';
import { AnimeCard, Loader } from '../../components';

export const AnimeListPage = () => {

  const [titles, setTitles] = useState<Title[]>();
  const [pagination, setPagination] = useState<IPagination>();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);
  const changePage: PaginationProps['onChange'] = page => {
    setActivePage(page);
  }

  useEffect(() => {
    setLoading(true);
    $api.get<AnimeList>('/title/updates', {
      params: {
        playlist_type: 'array',
        page: activePage,
        items_per_page: 6
      }
    })
      .then(response => {
        setTitles(response.data.list);
        setPagination(response.data.pagination);
        setLoading(false);
      });
  }, [activePage])

  if (loading) {
    return <Loader />;
  }

  return (<>
  <div className='container py-5'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center py-5 gap-5'>{titles && titles.map(title => {
      return (
        <AnimeCard
          key={title.id}
          image={title.posters.original.url}
          title={title.names.ru}
          code={title.code}
        />
      )
    })}</div>
    <div className='flex items-center justify-center'>
      <Pagination
        className='md:hidden block'
        total={pagination?.pages}
        current={activePage}
        onChange={changePage}
        showSizeChanger={false}
        size='small'
      />
      <Pagination
        className='hidden md:block'
        total={pagination?.pages}
        current={activePage}
        onChange={changePage}
        showSizeChanger={false}
      />
    </div>
  </div>
  </>)
}
