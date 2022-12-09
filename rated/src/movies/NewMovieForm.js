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
			<h1>Add a New Movie</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
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
				{/* <div className="form-group">
					<label htmlFor="pic">Movie Picture</label>
					<input
						value={movie.pic}
						onChange={e => setMovie({ ...movie, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div> */}
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						value={movie.genre}
						onChange={e => setMovie({ ...movie, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rating</label>
					<input
						value={movie.rating}
						onChange={e => setMovie({ ...movie, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="length">Movie Length</label>
					<input
						value={movie.length}
						onChange={e => setMovie({ ...movie, length: e.target.value })}
						className="form-control"
						id="length" name="length" />
				</div>
				<input className="btn btn-primary" type="submit" value="Add Movie" />
			</form>
		</main>
	)
}

export default NewMovieForm