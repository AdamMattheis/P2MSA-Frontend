import './App.css';
import Movies from './components/movies'
import TvShows from './components/tvshows'
import VideoGames from './components/videogames'

function App() {
  return (
    <div className="App">
        <h1>RATED</h1>
        <div className="App-buttons">
          <Movies />
          <TvShows />
          <VideoGames />
        </div>
        
    </div>
  );
}

export default App;
