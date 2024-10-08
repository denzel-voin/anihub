import { AnimeCardProps } from './AnimeCard.types.ts';
import { Link } from 'react-router-dom';
import { IMG_HOST } from '../../api';
import { IAnimeTop } from '../../data/AnimeTop.types.ts';

export const AnimeCard = ({ image, title, code }: AnimeCardProps) => {
  return (
    <>
      <div className="w-full border border-red-900 rounded-lg md:p-2 p-5">
        <img className="mx-auto" src={IMG_HOST + image} alt={`${title}`} />
        <h2 className="text-center text-lg mt-2 truncate">{title}</h2>
        <div className="flex items-center justify-center p-2">
          <Link
            to={`/anihub/title/${code}`}
            className="bg-gradient-to-r from-orange-900 to-red-900 px-3 py-2 rounded-lg font-semibold hover:opacity-85 transition-opacity"
          >
            Перейти к просмотру
          </Link>
        </div>
      </div>
    </>
  );
};

export const AnimeCardTopPage = ({
  image,
  title,
  link,
  description,
}: IAnimeTop) => {
  return (
    <>
      <div className="relative w-full max-h-[600px] overflow-hidden">
        <img
          className="w-full h-full object-cover brightness-50 min-h-[240px]"
          src={`${image}`}
          alt={`${title}`}
        />
        <div className="absolute inset-0 flex flex-col justify-between items-start p-5 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)] text-white">
          <div className="container h-full flex flex-col justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h1>
              <p className="hidden md:block text-xs md:text-lg lg:text-xl mb-6 max-w-2xl">
                {description}
              </p>
            </div>
            <Link
              to={`/anihub/title/${link}`}
              className="inline-block px-6 py-4 bg-red-700 hover:bg-red-600 text-white font-bold uppercase rounded-lg transition-colors"
            >
              Перейти к просмотру
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
