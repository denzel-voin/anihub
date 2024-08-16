import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className='md:hidden sticky top-0 left-0 bg-slate-900 border-b-slate-500 z-10'>
        <nav className='container flex items-center justify-between py-2'>
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            <Link to="/">AniHub</Link>
          </h1>
          <button onClick={() => setActive(!active)}>
            <Bars3BottomLeftIcon className="w-10" />
          </button>
        </nav>
      </header>
      <div className={`md:hidden absolute left-0 top-0 h-full w-full bg-slate-800 py-24 transition-transform ${active ? '-translate-y-0' : '-translate-y-full'}`}>
        <nav className='w-full h-full container flex flex-col items-end gap-5'>
          <NavLink to='/anime-list' className='header-link text-2xl font-bold'>Список аниме</NavLink>
          <NavLink to='/last-updates' className='header-link text-2xl font-bold'>Последние обновления</NavLink>
          <NavLink to='/schedule' className='header-link text-2xl font-bold'>Расписание</NavLink>
        </nav>
      </div>
    </>
  )
}
