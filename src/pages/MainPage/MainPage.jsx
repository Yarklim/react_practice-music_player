import { useState } from 'react';
import Track from '../../components/Track/Track';
import tracksList from '../../data/trackList';
import { Input } from '@mui/material';
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

  const handleChange = (e) => {
    const foundTracks = runSearch(e.target.value);
    setTracks(foundTracks);
  };
  return (
    <div className={s.search}>
      <Input
        className={s.input}
        placeholder="Search tracks"
        onChange={handleChange}
      />
      <div className={s.list}>
        {tracks?.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
