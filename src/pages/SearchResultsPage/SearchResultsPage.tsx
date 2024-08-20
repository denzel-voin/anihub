import { useLocation } from 'react-router-dom';
import { Title } from '../../types/anime.types.ts';
import { AnimeCard } from '../../components';

export const SearchResultsPage = () => {
  const location = useLocation();
  const titles = location.state?.titles as Title[];

  return (
    <div className="container py-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center py-5 gap-5">
        {titles &&
          titles.map(title => {
            return (
              <AnimeCard
                key={title.id}
                image={title.posters.original.url}
                title={title.names.ru}
                code={title.code}
              />
            );
          })}
      </div>
    </div>
  );
};
