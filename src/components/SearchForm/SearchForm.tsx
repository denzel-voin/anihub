import { FC, useState } from 'react';
import { AnimeList } from '../../types/anime.types.ts';
import { $api } from '../../api';
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
  closeMenu: () => void;
}

export const SearchForm: FC<SearchFormProps> = ({ closeMenu }) => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const getSearchTitles = () => {
    $api
      .get<AnimeList>('/title/search', {
        params: { search },
      })
      .then(response => {
        console.log(response.data.list);
        closeMenu();
        navigate('/anihub/search-results', { state: { titles: response.data.list } });
      });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        getSearchTitles();
        setSearch('');
      }}
      className="bg-zinc-950 w-fit rounded-lg flex"
    >
      <input
        className="bg-transparent outline-none text-base px-5"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Поиск аниме"
      />
      <button className="w-10 hover:opacity-80">
        <img src="/anihub/search.svg" alt="search" />
      </button>
    </form>
  );
};
