import { SongType } from '../../types';

export default function MusicCard({ song, previewUrl }: SongType) {
  return (
    <div className="track-display">
      <p>{ song }</p>
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
