import { useEffect, useState } from 'react';
import { $api } from '../../api';
import { Pagination, PaginationProps } from 'antd';

export const AnimeListPage = () => {

  const [titles, setTitles] = useState();
  const [pagination, setPagination] = useState();
  const [activePage, setActivePage] = useState(1);
  const changePage: PaginationProps['onChange'] = page => {
    setActivePage(page);
  }

  useEffect(() => {
    $api.get('/title/updates', {
      params: {
        playlist_type: 'array',
        page: activePage
      }
    })
      .then(response => {
        setTitles(response.data.list);
        setPagination(response.data.pagination);
      });
  }, [activePage])

  console.log(titles);
  console.log(pagination);
  return (<>
  <div className='container py-5'>
    <div className='flex items-center justify-center'>
      <Pagination
        className='md:hidden block'
        total={pagination?.pages}
        defaultCurrent={1}
        onChange={changePage}
        showSizeChanger={false}
        size='small'
      />
      <Pagination
        className='hidden md:block'
        total={pagination?.pages}
        defaultCurrent={1}
        onChange={changePage}
        showSizeChanger={false}
      />
    </div>
  </div>
  </>)
}
