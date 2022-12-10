import { useState } from "react"
import { useNavigate } from "react-router"

function NewMovieForm() {

	const navigate = useNavigate()

	const [movie, setMovie] = useState({
		name: '',
		genre: '',
		rating: '',
		length: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/movies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		})

		navigate('/movies')
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
			<h1 className="moviesPage">Add a New Movie</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
					<label htmlFor="name">Movie Name</label>
					<input
                        required
						value={movie.name}
						onChange={e => setMovie({ ...movie, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="genre">Genre</label>
					<input
						value={movie.genre}
						onChange={e => setMovie({ ...movie, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="rating">Rating</label>
					<input
						value={movie.rating}
						onChange={e => setMovie({ ...movie, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="length">Movie Length</label>
					<input
						value={movie.length}
						onChange={e => setMovie({ ...movie, length: e.target.value })}
						className="form-control"
						id="length" name="length" />
				</div>
                <div className="moviesPage2">
                    <input className="NewMovieButton" type="submit" value="Add Movie" />
                </div>
			</form>
		</main>
	)
}

export default NewMovieForm