import { useState } from "react"
import { useNavigate } from "react-router"

function NewVideogameForm() {

	const navigate = useNavigate()

	const [videogame, setVideogame] = useState({
		name: '',
		genre: '',
		rating: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/videogames`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(videogame)
		})

		navigate('/videogames')
	}

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
			<h1 className="moviesPage">Add a New Video Game</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
					<label htmlFor="name">Video Game Name</label>
					<input
						required
						value={videogame.name}
						onChange={e => setVideogame({ ...videogame, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="genre">Genre</label>
					<input
						value={videogame.genre}
						onChange={e => setVideogame({ ...videogame, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="rating">Rated</label>
					<input
						value={videogame.rating}
						onChange={e => setVideogame({ ...videogame, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<div className="moviesPage2">
                    <input className="NewMovieButton" type="submit" value="Add Video Game" />
                </div>
			</form>
		</main>
	)
}

export default NewVideogameForm