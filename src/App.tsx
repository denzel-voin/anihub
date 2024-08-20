import { Route, Routes } from 'react-router-dom';
import {
  HomePage,
  AnimeListPage,
  AnimeDetailPage,
  SearchResultsPage,
} from './pages';
import { Layout } from './components';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/anihub" element={<Layout />}>
          <Route path="/anihub" element={<HomePage />} index></Route>
          <Route path="/anihub/anime-list" element={<AnimeListPage />}></Route>
          <Route path="/anihub/title/:code" element={<AnimeDetailPage />}></Route>
          <Route path="/anihub/search-results" element={<SearchResultsPage />} />
        </Route>
      </Routes>
    </>
  );
};
