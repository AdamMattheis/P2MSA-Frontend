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
        <main className="moviesPage">
            <div className="text-center">
                <div className="moviesPage">
                    <h1>
                        {tvshows.name}
                    </h1>
                </div>
                <div className="moviesPage3">
                    <p>
                        Genre:   {tvshows.genre}
                    </p>
                    <br />
                    <p>
                        Number of Episodes:   {tvshows.episodes}.
                    </p>
                    <br />
                    <p>
                        TV Show Length:   {tvshows.length}.
                    </p>
                    <br />
                    <button className="NewMovieButton" onClick={editTvshows}>
                        Edit
                    </button>
                    <button type="submit" className="NewMovieButton" onClick={deleteTvshows}>
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
                    tvshows={tvshows}
                    onSubmit={createComment}
                />
            </div>
            <div>
                <a href='/tvshows' >
                    <button className='NewMovieButton'>
                        Back
                    </button>
                </a>
            </div>
        </main>
    )
}

export default TvshowDetails

