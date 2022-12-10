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
            <div className='title'>
                <a href='/'>
                    <button className='title'>
                        RATED
                    </button>
                </a>
            </div>
            <hr />
			<h1 className="moviesPage">Add a New TV Show</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
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
				<div className="moviesPage2">
					<label htmlFor="genre">Genre</label>
					<input
						value={tvshows.genre}
						onChange={e => setTvshows({ ...tvshows, genre: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="episodes">Number of Episodes</label>
					<input
						value={tvshows.episodes}
						onChange={e => setTvshows({ ...tvshows, episodes: e.target.value })}
						className="form-control"
						id="episodes"
						name="episodes"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="length">TV Show Length</label>
					<input
						value={tvshows.length}
						onChange={e => setTvshows({ ...tvshows, length: e.target.value })}
						className="form-control"
						id="length" name="length" />
				</div>
                <div className="moviesPage2">
                    <input className="NewMovieButton" type="submit" value="Add TV Show" />
                </div>
			</form>
		</main>
	)
}

export default NewTvshowForm