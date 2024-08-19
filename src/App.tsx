import { Route, Routes } from 'react-router-dom';
import { HomePage, AnimeListPage, AnimeDetailPage, SearchResultsPage } from './pages';
import { Layout } from './components';

export const App = () => {
  return <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} index></Route>
        <Route path='/anime-list' element={<AnimeListPage/>}></Route>
        <Route path='/title/:code' element={<AnimeDetailPage />}></Route>
        <Route path="/search-results" element={<SearchResultsPage />} />
      </Route>
    </Routes>
  </>;
};
