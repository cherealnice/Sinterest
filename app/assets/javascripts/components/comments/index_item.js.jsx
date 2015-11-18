(function (root) {

  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment">
            <h3 className="comment-author">{comment.author_id}</h3>
            <p className="comment-body">{comment.body}</p>
        </li>
      );
    }
  });
}(this));
