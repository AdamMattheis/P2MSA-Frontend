import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

const Videogame = () => {

    const navigate = useNavigate()
    
    const [videogame, setVideogame] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/videogames`)
            const resData = await response.json()
            setVideogame(resData)
        }
        fetchData()
    }, [])

    let videogameFormatted = videogame.map((videogame) => {
		return (
			<div className="flex" key={videogame.videogame_id}>
				<h2>
					<button onClick={() => navigate(`/videogames/${videogame.videogame_id}`)} > 
						{videogame.name}
                    </button> 
				</h2>
				<p className="text-center">
					Rated {videogame.rating}
				</p>
				<p className="text-center">
					Genre {videogame.genre}
        </p>
			</div>
		)
	})


  return (
    <main>
        <div className='title'>
            <a href='/'>
                <button className='title'>
                    RATED
                </button>
            </a>
        </div>
        <hr />
        <div className='moviesPage'>
            <div>
                <p>Video Games</p>
            </div>
            <div>
                <a href='/videogames/new' >
                    <button className='NewMovieButton'>
                        New Video Game
                    </button>
                </a>
            </div>
        </div>
        <div className='itemsPage'>
            {videogameFormatted}
        </div>
    </main>
  )
}

export default Videogame