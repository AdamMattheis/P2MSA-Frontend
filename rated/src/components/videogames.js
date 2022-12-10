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
			<div className="col-sm-6" key={videogame.videogame_id}>
				<h2>
					<button onClick={() => navigate(`/videogames/${videogame.videogame_id}`)} > 
						{videogame.name}
                    </button> 
				</h2>
				<p className="text-center">
					Rated {videogame.rating}
				</p>
				{/* <img style={{ maxWidth: 200 }} src={movie.pic} alt={movie.name} /> */}
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
        <div className='moviesPage'>
            <p>list of Videogames</p>
            <a href='/videogames/new'>
                <button>
                    New Videogame
                </button>
            </a>
        </div>
        <div className='videogamesPage'>
            {videogameFormatted}
        </div>
    </main>
  )
}

export default Videogame