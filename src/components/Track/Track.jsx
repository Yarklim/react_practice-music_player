import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import s from './Track.module.scss';

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;
  return (
    <div className={s.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={s.preview} src={preview} alt={title} />
      <div className={s.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{duration}</p>
    </div>
  );
};

export default Track;
