import { AnimeCard, AnimeCardTopPage } from '../../components';
import { AnimeTopList, PopularAnimeList } from '../../data/AnimeTop.ts';
import { Carousel } from 'antd';

export const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <Carousel autoplay>
          {AnimeTopList.list.map(title => (
            <div key={title.id}>
              <AnimeCardTopPage
                image={title.image}
                title={title.title}
                description={title.description}
                link={title.link}
                id={title.id}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold m-4">
          Популярные аниме
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center py-5 gap-5">
          {PopularAnimeList.map(title => {
            return (
              <AnimeCard
                key={title.key}
                image={title.image}
                title={title.title}
                code={title.code}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
