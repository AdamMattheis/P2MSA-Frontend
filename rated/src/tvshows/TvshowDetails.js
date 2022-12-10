import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"
import CommentsCard from "../movies/CommentsCard"
import NewCommentForm from "../movies/NewCommentForm"

function TvshowDetails() {

	const { tvshows_id } = useParams()

	const navigate = useNavigate()

	const [tvshows, setTvshows] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/tvshows/${tvshows_id}`)
			const resData = await response.json()
			setTvshows(resData)
		}
		fetchData()
	}, [tvshows_id])

	if (tvshows === null) {
		return <h1>Loading</h1>
	}

	function editTvshows() {
		navigate(`/tvshows/${tvshows.tvshows_id}/edit`)
	}

	async function deleteTvshows() {
		await fetch(`http://localhost:3000/tvshows/${tvshows.tvshows_id}`, {
			method: 'DELETE'
		})
		navigate('/tvshows')
	}

	async function deleteComment(deletedComment) {
		await fetch(`http://localhost:3000/tvshows/${tvshows.tvshows_id}/comments/${deletedComment.comment_id}`, {
			method: 'DELETE'
		})

		setTvshows({
			...tvshows,
			comments: tvshows.comments
				.filter(comment => comment.comment_id !== deletedComment.comment_id)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`http://localhost:3000/tvshows/${tvshows.tvshows_id}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setTvshows({
			...tvshows,
			comments: [
				...tvshows.comments,
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
	if (tvshows.comments.length) {
		let sumRatings = tvshows.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / tvshows.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = tvshows.comments.map(comment => {
			return (
				<CommentsCard key={comment.comment_id} comment={comment} onDelete={() => deleteComment(comment)} />
			)
		})
	}


	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<h3>
					    {tvshows.name}
					</h3>
				</div>
				<div className="col-sm-6">
					<h2>
						Genre
					</h2>
					{tvshows.genre}
					<br />
					<h3>
						Number of Episodes {tvshows.episodes}.
					</h3>
					<br />
                    <h3>
						TV Show Length {tvshows.length}.
					</h3>
					<br />
					<button className="btn btn-warning" onClick={editTvshows}>
						Edit
					</button>
					<button type="submit" className="btn btn-danger" onClick={deleteTvshows}>
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
				tvshows={tvshows}
				onSubmit={createComment}
			/>
		</main>
	)
}

export default TvshowDetails