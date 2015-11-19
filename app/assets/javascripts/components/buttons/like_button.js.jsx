(function (root) {

  root.LikeButton = React.createClass({

    getInitialState: function () {
      return {liked: this.props.liked};
    },

    componentWillUnmount: function () {
    },

    _handleClick: function (e) {
      e.preventDefault();

      ApiUtil.setLike(
        this.props.likeClass,
        this.props.target.id,
        this.state.liked
      );
    },

    render: function () {
      var className = this.state.liked ? ' liked' : ' unliked';
      var text = this.state.liked ? 'Unlike' : 'Like';
      return (
        <button onClick={this._handleClick} className={'like-button' + className}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </button>
      );
    }
  });
}(this));
