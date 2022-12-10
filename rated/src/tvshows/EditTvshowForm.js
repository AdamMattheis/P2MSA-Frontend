import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function EditTvshowForm() {

	const navigate = useNavigate()

    const { tvshows_id } = useParams()

    const [tvshows, setTvshows] = useState({
		name: '',
		genre: '',
		episodes: '',
		length: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/tvshows/${tvshows_id}`)
			const resData = await response.json()
			setTvshows(resData)
		}
		fetchData()
	}, [ tvshows_id ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/tvshows/${tvshows.tvshows_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(tvshows)
		})

		navigate(`/tvshows/${tvshows.tvshows_id}`)
	}

	return (
		<main className="moviesPage">
			<h1>Edit TV Show</h1>
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
					<label htmlFor="pic">TV Show Picture</label>
					<input
						value={tvshows.pic}
						onChange={e => setTvshows({ ...tvshows, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="genre">Genre</label>
					<input
						required
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
						id="length"
						name="length"
					/>
				</div>
				<input className="NewMovieButton" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditTvshowForm