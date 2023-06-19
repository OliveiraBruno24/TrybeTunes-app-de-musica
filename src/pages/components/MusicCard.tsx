import { SongType } from '../../types';

export default function MusicCard({ song, previewUrl, trackName, imageAlbum }: SongType) {
  return (
    <div className="track-display">
      <p>{ song }</p>
      <p>{trackName}</p>
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
