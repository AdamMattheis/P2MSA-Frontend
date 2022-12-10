function CommentsCard({ comment, onDelete }) {
    return (
        <div className="border col-sm-4">
            <h4>{comment.content}</h4>
            <h4>Rating: {comment.stars}</h4>
            <button className="NewMovieButton" onClick={onDelete} >
                Delete Comment
            </button>
        </div>
    )
}

export default CommentsCard