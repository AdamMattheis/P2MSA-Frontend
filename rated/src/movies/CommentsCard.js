function CommentsCard({ comment, onDelete }) {
    return (
        <div className="border col-sm-4">
            <h4>{comment.content}</h4>
            {/* <h3>
                <strong>- {comment.author.firstName} {comment.author.lastName}</strong>
            </h3> */}
            <h4>Rating: {comment.stars}</h4>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        </div>
    )
}

export default CommentsCard