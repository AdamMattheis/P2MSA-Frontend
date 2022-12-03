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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tvshows" element={<TvShows />} />
          <Route exact path="/videogames" element={<VideoGames />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;