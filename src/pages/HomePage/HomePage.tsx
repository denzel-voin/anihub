import { useEffect, useState } from 'react';
import { AnimeList, Title } from '../../types/anime.types.ts';
import { $api } from '../../api';
import { AnimeCard, AnimeCardTopPage, Loader } from '../../components';
import { AnimeTopList } from '../../data/AnimeTop.ts';
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

        <Carousel autoplay>
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

    </>
  )
}
