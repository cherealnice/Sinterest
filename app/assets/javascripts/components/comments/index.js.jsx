(function (root) {

  root.CommentsIndex = React.createClass({

    getInitialState: function () {
      return ({ comments: CommentStore.all() });
    },

    componentDidMount: function () {
      CommentStore.addChangeHandler(this._onChange);
    },

    componentWillUnmount: function () {
      CommentStore.removeChangeHandler(this._onChange);
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
}(this));
