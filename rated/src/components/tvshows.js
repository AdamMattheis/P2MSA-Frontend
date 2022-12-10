import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

//import { useNavigate, useParams } from "react-router"

const Tvshows = () => {

    const navigate = useNavigate()
    
    const [tvshows, setTvshows] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/tvshows`)
            const resData = await response.json()
            setTvshows(resData)
        }
        fetchData()
    }, [])

    let tvshowsFormatted = tvshows.map((tvshows) => {
		return (
			<div className="col-sm-6" key={tvshows.tvshows_id}>
				<h2>
					<button onClick={() => navigate(`/tvshows/${tvshows.tvshows_id}`)} > 
						{tvshows.name}
                    </button> 
				</h2>
				{/* <img style={{ maxWidth: 200 }} src={movie.pic} alt={movie.name} /> */}
				<p className="text-center">
					Genre {tvshows.genre}
				</p>
        <p className="text-center">
					 Number of Episodes {tvshows.episodes}
				</p>
        <p className="text-center">
					Length {tvshows.length}
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
        <div className='tvShowsPage'>
            <p>list of TV Shows</p>
            <a href='/tvshows/new'>
                <button>
                    New TV Show
                </button>
            </a>
        </div>
        <div className='tvMoviesPage'>
            {tvshowsFormatted}
        </div>
    </main>
  )
}

export default Tvshows