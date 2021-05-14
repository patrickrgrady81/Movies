import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState("");

  useEffect(() => {
    axios.get('/api/v1/movies.json')
        .then(res => setMovies(res.data))
      }, []);

  return (
      <div className="App">
        <MovieList movies={movies}></MovieList>
      </div>
  );
}

export default App;