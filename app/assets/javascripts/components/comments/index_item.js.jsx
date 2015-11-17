(function (root) {

  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment">
          <h3>{comment.author}</h3>
          <p>{comment.body}</p>
        </li>
      );
    }
  });
}(this));
