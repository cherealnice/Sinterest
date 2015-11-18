(function (root) {

  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment">
          <div className="comment-container">
            <h3 id="comment-author">{comment.author_id}</h3>
            <p className="comment-body">{comment.body}</p>
          </div>
        </li>
      );
    }
  });
}(this));
