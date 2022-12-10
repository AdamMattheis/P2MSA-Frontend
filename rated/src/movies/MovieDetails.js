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
		<main className="moviesPage">
			<div className="text-center">
				<div className="moviesPage">
					<h1>
					    {movie.name}
					</h1>
				</div>
				<div className="moviesPage3">
					<p>
						Genre:   {movie.genre}
					</p>
					
					<br />
					<p>
						Rated:   {movie.rating}.
					</p>
					<br />
                    <p>
						Movie Length:   {movie.length}.
					</p>
					<br />
					<button className="NewMovieButton" onClick={editMovie}>
						Edit
					</button>
					<button type="submit" className="NewMovieButton" onClick={deleteMovie}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h2 className="moviesPage3">Comments</h2>
			<div className="itemsPage">
				{comments}
			</div>
			<hr />
            <div className="moviesPage3">
                New Comment
            </div>
            <div className="moviesPage4">
                <NewCommentForm
                    movie={movie}
                    onSubmit={createComment}
                />
            </div>
            <div>
                <a href='/movies' >
                    <button className='NewMovieButton'>
                        Back
                    </button>
                </a>
            </div>
		</main>
	)
}

export default MovieDetails