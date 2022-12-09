import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"
import CommentsCard from './CommentsCard'
import NewCommentForm from "./NewCommentForm";

function MovieDetails() {

	const { movie_id } = useParams()

	const navigate = useNavigate()

	const [movie, setMovie] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/movies/${movie_id}`)
			const resData = await response.json()
			setMovie(resData)
		}
		fetchData()
	}, [movie_id])

	if (movie === null) {
		return <h1>Loading</h1>
	}

	function editMovie() {
		navigate(`/movies/${movie.movie_id}/edit`)
	}

	async function deleteMovie() {
		await fetch(`http://localhost:3000/movies/${movie.movie_id}`, {
			method: 'DELETE'
		})
		navigate('/movies')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:3000/movies/${movie.movie_id}/comments/${deletedComment.comment_id}`, {
			method: 'DELETE'
		})

		setMovie({
			...movie,
			comments: movie.comments
				.filter(comment => comment.comment_id !== deletedComment.comment_id)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:3000/movies/${movie.movie_id}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setMovie({
			...movie,
			comments: [
				...movie.comments,
				comment
			]
		})

	}



	let comments = (
		<h3 className="inactive">
			No comments yet!
		</h3>
	)
	let rating = (
		<h3 className="inactive">
			Not yet star rated
		</h3>
	)
	if (movie.comments.length) {
		let sumRatings = movie.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / movie.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = movie.comments.map(comment => {
			return (
				<CommentsCard key={comment.comment_id} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}


	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					{/* <img style={{ maxWidth: 200 }} src={movie.pic} alt={movie.name} /> */}
					<h3>
					    {movie.name}
					</h3>
				</div>
				<div className="col-sm-6">
					<h2>
						Genre
					</h2>
					{movie.genre}
					<br />
					<h3>
						Rated {movie.rating}.
					</h3>
					<br />
                    <h3>
						Movie Length {movie.length}.
					</h3>
					<br />
					<button className="btn btn-warning" onClick={editMovie}>
						Edit
					</button>
					<button type="submit" className="btn btn-danger" onClick={deleteMovie}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h2>Comments</h2>
			<div className="row">
				{comments}
			</div>
			<hr />
            New Comment
			<NewCommentForm
				movie={movie}
				onSubmit={createComment}
			/>
		</main>
	)
}

export default MovieDetails