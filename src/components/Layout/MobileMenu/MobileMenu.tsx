import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { SearchForm } from '../../SearchForm/SearchForm.tsx';

export const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className='md:hidden sticky top-0 left-0 bg-zinc-900 border-b-slate-500 z-10'>
        <nav className='container flex items-center justify-between py-2'>
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            <Link to='/'>
              <img src="../../../../public/logo.svg" alt="" className='w-40' onClick={() => setActive(false)} />
            </Link>
          </h1>
          <button onClick={() => setActive(!active)}>
            <Bars3BottomLeftIcon className="w-10 fill-orange-500" />
          </button>
        </nav>
      </header>
      <div className={`md:hidden absolute left-0 top-0 h-full w-full bg-zinc-800 py-24 transition-transform ${active ? '-translate-y-0' : '-translate-y-full'}`}>
        <nav className='w-full h-full container flex flex-col items-end gap-5'>
          <SearchForm />
          <NavLink to='/anime-list' className='header-link text-2xl font-bold' onClick={() => setActive(!active)}>Новинки</NavLink>
        </nav>
      </div>
    </>
  )
}
