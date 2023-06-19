import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import LoadingMessage from '../components/Loading';
import MusicCard from '../components/MusicCard';

function Album() {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState< [AlbumType, ...SongType[]] | []>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const musicas = await getMusics(id as string);
      setData(musicas);
      setArtistName(musicas[0].artistName);
      setAlbumName(musicas[0].collectionName);
      console.log(albumName);
      console.log(await data);
      setIsLoading(false);
    };
    fetchApi();
  }, [albumName, data, id]);

  return (
    <div>
      {isLoading ? <LoadingMessage />
        : (
          <>
            <p data-testid="album-name">
              {albumName}
            </p>
            <h3 data-testid="artist-name">
              {artistName}
            </h3>
            <div>
              {data.slice(1).map((song:any) => {
                return (
                  <MusicCard
                    key={ song.trackId }
                    trackId={ song.trackId }
                    trackName={ song.trackName }
                    previewUrl={ song.previewUrl }
                    imageAlbum={ song.artworkUrl100 }
                  />
                );
              })}
            </div>
          </>
        )}
    </div>
  );
}

export default Album;
