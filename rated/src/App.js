import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

import Movies from './components/movies'
import NewMovieForm from './movies/NewMovieForm'
import MovieDetails from './movies/MovieDetails'
import EditMovieForm from './movies/EditMovieForm'

import TvShows from './components/tvshows'
import NewTvshowForm from './tvshows/NewTvshowForm'
import TvshowDetails from './tvshows/TvshowDetails'
import EditTvshowForm from './tvshows/EditTvshowForm'


import VideoGames from './components/videogames'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/new" element={<NewMovieForm />} />
          <Route path="/movies/:movie_id" element={<MovieDetails />} />
          <Route path="/movies/:movie_id/edit" element={<EditMovieForm />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/tvshows/new" element={<NewTvshowForm />} />
          <Route path="/tvshows/:tvshows_id" element={<TvshowDetails />} />
          <Route path="/tvshows/:tvshows_id/edit" element={<EditTvshowForm />} />
          <Route path="/videogames" element={<VideoGames />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
