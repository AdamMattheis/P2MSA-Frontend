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
			<h1>Add a New Videogame</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Videogame Name</label>
					<input
						required
						value={videogame.name}
						onChange={e => setVideogame({ ...videogame, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				{/* <div className="form-group">
					<label htmlFor="pic">Videogame Picture</label>
					<input
						value={videogame.pic}
						onChange={e => setVideogame({ ...videogame, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div> */}
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						value={videogame.genre}
						onChange={e => setVideogame({ ...videogame, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rated</label>
					<input
						value={videogame.rating}
						onChange={e => setVideogame({ ...videogame, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Videogame" />
			</form>
		</main>
	)
}

export default NewVideogameForm