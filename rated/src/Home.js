import React from 'react';

function Home() {
    return (
        <main>
            <div className='title'>
            <a href='/'>
                <button className='title'>
                RATED
                </button>
            </a>
            
            </div>
    
            <div>
                <ul className='background-buttons'>
                    <li>
                        <a href='/movies'>
                            <button className='App-buttons'>Movies</button>
                        </a>
                    </li>
                    <li>
                        <a href='/tvshows'>
                            <button className='App-buttons'>TV Shows</button>
                        </a>
                    </li>
                    <li>
                        <a href='/videogames'>
                            <button className='App-buttons'>Video Games</button>
                        </a>
                    </li>
                </ul>
            </div>
      </main>
    );
  }
  
  export default Home;