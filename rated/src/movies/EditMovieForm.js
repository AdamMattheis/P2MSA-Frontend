import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function EditMovieForm() {

	const navigate = useNavigate()

    const { movie_id } = useParams()

    const [movie, setMovie] = useState({
		name: '',
		genre: '',
		rating: '',
		length: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/movies/${movie_id}`)
			const resData = await response.json()
			setMovie(resData)
		}
		fetchData()
	}, [ movie_id ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/movies/${movie.movie_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		})

		navigate(`/movies/${movie.movie_id}`)
	}

	return (
		<main>
			<h1>Edit Movie</h1>
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
                <div className="form-group">
					<label htmlFor="pic">Movie Picture</label>
					<input
						value={movie.pic}
						onChange={e => setMovie({ ...movie, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						required
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
						id="length"
						name="length"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditMovieForm