import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(response => setSongs(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to VU Music</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
