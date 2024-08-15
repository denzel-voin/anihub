import { Link, NavLink } from 'react-router-dom';

export const  DesctopMenu = () => {
  return (
    <>
      <header className='hidden md:block sticky top-0 left-0 bg-slate-900 border-b-slate-500 z-10'>
        <nav className='container py-3 flex items-center justify-between'>
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              <Link to='/'>AniHub</Link>
            </h1>
          <div className='flex gap-5'>
            <NavLink to='/anime-list' className='text-lg'>Список аниме</NavLink>
            <NavLink to='/last-updates' className='text-lg'>Последние обновления</NavLink>
            <NavLink to='/schedule' className='text-lg'>Расписание</NavLink>
          </div>
        </nav>
      </header>
    </>
  )
}
