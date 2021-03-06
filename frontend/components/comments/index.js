var React = require('react');
var ReactRouter = require('react-router');
var CommentIndexItem = require('./index_item');
var CommentStore = require('../../stores/comment_store');

var CommentsIndex = React.createClass({

  getInitialState: function () {
    return ({ comments: CommentStore.all() });
  },

  componentDidMount: function () {
    this.commentStoreToken = CommentStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.commentStoreToken.remove();
  },

  _onChange: function () {
    this.setState( {comments: CommentStore.all()} );
  },

  render: function () {
    return (
      <ul className='comment-list'>
        {this.props.comments.map(function (comment) {
          return (<CommentIndexItem key={comment.id} comment={comment} />);
        })}
      </ul>
    );
  }
});

module.exports = CommentsIndex;
