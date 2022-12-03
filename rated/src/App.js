import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Movies from './components/movies'
import TvShows from './components/tvshows'
import VideoGames from './components/videogames'

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>
          <h1 className='title'>
            RATED
          </h1>
        </Link>
       
      </div>

      <div>
        <ul className='background-buttons'>
          <li>
            <Link to='/movies'>
              <button className='App-buttons'>Movies</button>
            </Link>
          </li>
          <li>
            <Link to='/tvshows'>
              <button className='App-buttons'>TV Shows</button>
            </Link>
          </li>
          <li>
            <Link to='/videogames'>
              <button className='App-buttons'>Video Games</button>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Routes>
        <Route path='/'/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/tvshows' element={<TvShows/>} />
          <Route path='/videogames' element={<VideoGames/>} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
