import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movies from './components/movies'
import NewMovieForm from './movies/NewMovieForm'
import MovieDetails from './movies/MovieDetails'
import EditPlaceForm from './movies/EditMovieForm';
import TvShows from './components/tvshows'
import VideoGames from './components/videogames'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/new" element={<NewMovieForm />} />
          <Route path="/movies/:movie_id" element={<MovieDetails />} />
          <Route path="/movies/:movie_id/edit" element={<EditPlaceForm />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/videogames" element={<VideoGames />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
