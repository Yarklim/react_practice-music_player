import { useState } from 'react';
import { Input } from '@mui/material';
import tracksList from '../../data/trackList';
import Track from '../../components/Track/Track';
import s from './MainPage.module.scss';

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={s.search}>
      <Input
        className={s.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={s.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
