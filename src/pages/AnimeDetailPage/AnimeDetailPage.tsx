import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { $api, IMG_HOST, VIDEO_HOST } from '../../api';
import { Title } from '../../types/anime.types.ts';
import ReactPlayer from 'react-player';
import { Badge, Loader } from '../../components';

export const AnimeDetailPage = () => {
  const [title, setTitle] = useState<Title>();
  const [activeEpisode, setActiveEpisode] = useState(1);
  const { code } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    $api
      .get<Title>('./title', {
        params: {
          code: code,
          playlist_type: 'array',
        },
      })
      .then(response => {
        setTitle(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  let count = 0;

  return (
    <>
      <div className="container py-5">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          <img src={IMG_HOST + title?.posters.original.url} alt="" />
          <div className="text-justify">
            <p>{title?.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {title?.genres.map(genre => (
                <Badge text={genre} key={(count += 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="p-5 bg-slate-800/20 rounded-lg">
          <select
            value={activeEpisode}
            onChange={e => setActiveEpisode(Number(e.target.value))}
            className="bg-slate-800 p-2 rounded-lg outline-none cursor-pointer w-full"
          >
            {title?.player.list.map(episode => (
              <option value={episode.episode} key={(count += 1)}>
                Серия {episode.episode}
              </option>
            ))}
          </select>

          {title?.player.list.map(episode => (
            <div className="mt-5" key={episode.uuid}>
              {episode.episode === activeEpisode ? (
                <ReactPlayer
                  className="rounded-lg overflow-hidden"
                  width="100%"
                  height="100%"
                  url={VIDEO_HOST + episode.hls.hd}
                  controls
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
