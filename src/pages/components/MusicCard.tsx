import { useState } from 'react';
import { SongType } from '../../types';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

export default function MusicCard(
  {
    song, previewUrl, trackName, imageAlbum, trackId,
  }: SongType,
) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoritas = () => {
    if (isFavorite) {
      removeSong({
        song,
        previewUrl,
        trackName,
        imageAlbum,
        trackId,
      });
    } else {
      addSong({
        song,
        previewUrl,
        trackName,
        imageAlbum,
        trackId,
      });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="track-display">
      <p>{ song }</p>
      <p>{trackName}</p>

      <label
        htmlFor={ `checkbox-music-${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          id={ `checkbox-music-${trackId}` }
          checked={ isFavorite }
          onChange={ favoritas }
          // style={ { display: 'none' } } // para ocultar o checkbox, assim parece que o coração é o check.
        />
        <img
          src={ isFavorite ? checkedHeart : emptyHeart }
          alt="favorite"
        />
        {}
      </label>
      <div>
        <img src={ imageAlbum } alt="capa" />
      </div>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        Deu ruim ai fiao
        {' '}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}
