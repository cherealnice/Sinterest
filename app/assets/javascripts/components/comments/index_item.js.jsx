(function (root) {

  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment">
            <h3 className="comment-author">
              <img className='user-thumb' src={comment.author_image_url} />
            </h3>
            <p className="comment-body">{comment.body}</p>
        </li>
      );
    }
  });
}(this));
