import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

//import { useNavigate, useParams } from "react-router"

const Movies = () => {

    const navigate = useNavigate()
    
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/movies`)
            const resData = await response.json()
            setMovies(resData)
        }
        fetchData()
    }, [])

    let moviesFormatted = movies.map((movie) => {
		return (
			<div className="col-sm-6" key={movie.movieId}>
				<h2>
					<button onClick={() => navigate(`/movies/${movie.movieId}`)} > 
						{movie.name}
                    </button> 
				</h2>
				<p className="text-center">
					Rating {movie.rating}
				</p>
				<img style={{ maxWidth: 200 }} src={movie.pic} alt={movie.name} />
				<p className="text-center">
					Genre {movie.genre}
				</p>
                <p className="text-center">
					Length {movie.length}
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
            <p>list of movies</p>
        </div>
        <div>
            {moviesFormatted}
        </div>
    </main>
  )
}

export default Movies