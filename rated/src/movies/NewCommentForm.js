import { useState, useEffect } from "react"

function NewCommentForm({ onSubmit }) {

    const [comment, setComment] = useState({
        content: '',
        stars: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/`)
            const resData = await response.json()
            setComment({ ...resData })
        }
        fetchData()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: '',
            stars: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className='moviesPage2'>
                    <label htmlFor="content"></label>
                    <textarea
                        required
                        value={comment.content}
                        onChange={e => setComment({ ...comment, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <div className="row">
                <div className='moviesPage2'>
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        value={comment.stars}
                        onChange={e => setComment({ ...comment, stars: e.target.value })}
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div>
            </div>
            <input className="NewMovieButton" type="submit" value="Add Comment" />
        </form>
    )
}

export default NewCommentForm