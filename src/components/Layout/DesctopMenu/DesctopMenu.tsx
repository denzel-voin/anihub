import { Link, NavLink } from 'react-router-dom';
import { SearchForm } from '../../SearchForm/SearchForm.tsx';
import { useState } from 'react';

export const DesctopMenu = () => {
  const [active, setActive] = useState(false);
  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <header className="hidden md:block sticky top-0 left-0 bg-zinc-900 border-b-slate-500 z-10">
        <nav className="container py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            <Link to="/anihub">
              <img src="/anihub/logo.svg" alt="" className="w-40" />
            </Link>
          </h1>
          <div className="flex gap-5">
            <SearchForm closeMenu={closeMenu} />
            <NavLink
              to="/anihub/anime-list"
              className="header-link text-2xl font-bold"
              onClick={() => setActive(!active)}
            >
              Новинки
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};
