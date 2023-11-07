import { createContext, useState } from 'react';
import trackList from '../data/trackList';

const audio = new Audio();

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = (track) => {};

  const value = { currentTrack, isPlaying, handleToggleAudio };

  return (
    <AudioContext.Provider value={{ value }}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
