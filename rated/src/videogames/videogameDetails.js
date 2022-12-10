import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"
import CommentsCard from "../movies/CommentsCard"
import NewCommentForm from "../movies/NewCommentForm"

function VideogameDetails() {

	const { videogame_id } = useParams()

	const navigate = useNavigate()

	const [videogame, setVideogame] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/videogames/${videogame_id}`)
			const resData = await response.json()
			setVideogame(resData)
		}
		fetchData()
	}, [videogame_id])

	if (videogame === null) {
		return <h1>Loading</h1>
	}

	function editVideogame() {
		navigate(`/videogames/${videogame.videogame_id}/edit`)
	}

	async function deleteVideogame() {
		await fetch(`http://localhost:3000/videogames/${videogame.videogame_id}`, {
			method: 'DELETE'
		})
		navigate('/videogames')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:3000/videogames/${videogame.videogame_id}/comments/${deletedComment.comment_id}`, {
			method: 'DELETE'
		})

		setVideogame({
			...videogame,
			comments: videogame.comments
				.filter(comment => comment.comment_id !== deletedComment.comment_id)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:3000/videogames/${videogame.videogame_id}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setVideogame({
			...videogame,
			comments: [
				...videogame.comments,
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
	if (videogame.comments.length) {
		let sumRatings = videogame.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / videogame.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = videogame.comments.map(comment => {
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
						{videogame.name}
					</h1>
				</div>
				<div className="moviesPage3">
					<p>
						Genre:   {videogame.genre}
					</p>
					
					<br />
					<p>
						Rated:   {videogame.rating}.
					</p>
					<br />
					<button className="NewMovieButton" onClick={editVideogame}>
						Edit
					</button>
					<button type="submit" className="NewMovieButton" onClick={deleteVideogame}>
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
					videogame={videogame}
					onSubmit={createComment}
				/>
			</div>
			<div>
				<a href='/videogames' >
					<button className='NewMovieButton'>
						Back
					</button>
				</a>
			</div>
		</main>
	)
}

export default VideogameDetails

