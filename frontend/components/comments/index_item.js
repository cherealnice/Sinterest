var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var CommentIndexItem = React.createClass({
  render: function () {
    var comment = this.props.comment;
    return (
      <li className="comment">
          <h3 className="comment-author">
            <Link to={'users/' + comment.author_id}>
              <img className='user-thumb' src={comment.author_image_url} />
            </Link>
          </h3>
          <p className="comment-body">{comment.body}</p>
      </li>
    );
  }
});

module.exports = CommentIndexItem;
