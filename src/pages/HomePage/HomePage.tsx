import { useEffect, useState } from 'react';
import { AnimeList, Title } from '../../types/anime.types.ts';
import { $api } from '../../api';
import { AnimeCard, AnimeCardTopPage, Loader } from '../../components';
import { AnimeTopList, PopularAnimeList } from '../../data/AnimeTop.ts';
import { Carousel } from 'antd';

export const HomePage = () => {
  const [title, setTitle] = useState<Title>();
  const [titles, setTitles] = useState<Title[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    $api.get<Title>('/title/changes', {
      params: {
        playlist_type: 'array',
        items_per_page: 3
      }
    })
      .then(response => {
        setTitles(response.data.list);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className='w-full'>

        <Carousel autoplay >
          {AnimeTopList.list.map(title => (
            <div key={title.id}>
              <AnimeCardTopPage
                image={title.image}
                title={title.title}
                description={title.description}
                link={title.link}
              />
            </div>
          ))}
        </Carousel>

      </div>

      <div className='container'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold m-4'>Популярные аниме</h2>
        <div
          className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center py-5 gap-5'>{PopularAnimeList.map(title => {
          return (
            <AnimeCard
              key={title.key}
              image={title.image}
              title={title.title}
              code={title.code}
            />
          )
        })}</div>
      </div>

    </>
  )
}
