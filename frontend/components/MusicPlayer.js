import React, { useState, useEffect } from 'react';

const MusicPlayer = ({ trackUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(trackUrl);
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => audio.pause();
  }, [isPlaying, trackUrl]);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
