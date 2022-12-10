import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function EditVideogameForm() {

	const navigate = useNavigate()

    const { videogame_id } = useParams()

    const [videogame, setVideogame] = useState({
		name: '',
		genre: '',
		rating: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/videogames/${videogame_id}`)
			const resData = await response.json()
			setVideogame(resData)
		}
		fetchData()
	}, [ videogame_id ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/videogames/${videogame.videogame_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(videogame)
		})

		navigate(`/videogames/${videogame.videogame_id}`)
	}

	return (
		<main className="moviesPage">
			<h1>Edit Videogame</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
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
                <div className="moviesPage2">
					<label htmlFor="pic">Videogame Picture</label>
					<input
						value={videogame.pic}
						onChange={e => setVideogame({ ...videogame, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
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
				<input className="NewMovieButton" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditVideogameForm