import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movies from './components/movies'
import TvShows from './components/tvshows'
import VideoGames from './components/videogames'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/videogames" element={<VideoGames />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
