import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

const Movies = () => {

    const navigate = useNavigate()
    
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/movies`)
            const resData = await response.json()
            setMovies(resData)
        }
        fetchData()
    }, [])

    let moviesFormatted = movies.map((movie) => {
		return (
			<div className='flex' key={movie.movie_id}>
				<h2>
                    <div className='detailsButton'>
                        <button className='detailsButton' onClick={() => navigate(`/movies/${movie.movie_id}`)} > 
                            {movie.name}
                        </button> 
                   </div>
				</h2>
				<p className='text-center'>
					Rated: {movie.rating}
				</p>
				<p className='text-center'>
				    Genre: {movie.genre}
				</p>
                <p className='text-center'>
					Movie Length: {movie.length}
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
                <p>Movies</p>
            </div>
            <div>
                <a href='/movies/new' >
                    <button className='NewMovieButton'>
                        New Movie
                    </button>
                </a>
            </div>
        </div>
        <div className='itemsPage'>
            {moviesFormatted}
        </div>
    </main>
  )
}

export default Movies