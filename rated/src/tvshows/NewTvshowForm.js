import { useState } from "react"
import { useNavigate } from "react-router"

function NewTvshowForm() {

	const navigate = useNavigate()

	const [tvshows, setTvshows] = useState({
		name: '',
		genre: '',
		episodes: '',
		length: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/tvshows`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tvshows)
		})

		navigate('/tvshows')
	}

	return (
		<main>
			<h1>Add a New TV Show</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">TV Show Name</label>
					<input
						required
						value={tvshows.name}
						onChange={e => setTvshows({ ...tvshows, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						value={tvshows.genre}
						onChange={e => setTvshows({ ...tvshows, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="episodes">Number of Episodes</label>
					<input
						value={tvshows.episodes}
						onChange={e => setTvshows({ ...tvshows, episodes: e.target.value })}
						className="form-control"
						id="episodes"
						name="episodes"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="length">TV Show Length</label>
					<input
						value={tvshows.length}
						onChange={e => setTvshows({ ...tvshows, length: e.target.value })}
						className="form-control"
						id="length" name="length" />
				</div>
				<input className="btn btn-primary" type="submit" value="Add TV Show" />
			</form>
		</main>
	)
}

export default NewTvshowForm