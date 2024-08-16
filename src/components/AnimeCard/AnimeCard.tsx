import { AnimeCardProps } from './AnimeCard.types.ts';
import { Link } from 'react-router-dom';
import { IMG_HOST } from '../../api';

export const AnimeCard = ({image, title, code}: AnimeCardProps) => {
  return (
    <>
      <div className='w-full border border-slate-500 rounded-lg md:p-2 p-5'>
        <img className='mx-auto' src={IMG_HOST + image}
             alt={`${title}`} />
        <h2 className='text-center text-lg mt-2 truncate'>{title}</h2>
        <div className='flex items-center justify-center p-2'>
          <Link to={`/title/${code}`}
                className='bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-2 rounded-lg font-semibold hover:opacity-85 transition-opacity'>Перейти
            к просмотру</Link>
        </div>
      </div>
    </>
  )
}
