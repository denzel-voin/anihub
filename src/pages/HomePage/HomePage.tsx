import { useEffect, useState } from 'react';
import { Title } from '../../types/anime.types.ts';
import { $api } from '../../api';
import { AnimeCard } from '../../components';

export const HomePage = () => {
  const [title, setTitle] = useState<Title>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    $api.get<Title>('/title/random', {})
      .then(response => setTitle(response.data))
  }, []);

  console.log(title);
  return (
    <>
      <div className='container'>
        <div className='max-w-80'>
          {title && (<AnimeCard key={title?.id} image={title.posters.original.url} title={title.names.ru} code={title?.code} />)}
        </div>
        <div className='py-5 flex gap-2'>
          <form onSubmit={e => e.preventDefault()}>
            <input
              className='bg-slate-950 border border-slate-500 outline-none'
              type="text"
            />
            <button className='bg-slate-800 rounded-lg px-3 py-1'>Найти</button>
          </form>
        </div>
      </div>
    </>
  )
}
