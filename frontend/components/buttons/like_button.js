var React = require('react');
var ReactRouter = require('react-router');
var LikeStore = require('../../stores/like_store');
var ApiUtil = require('../../util/api_util');

var LikeButton = React.createClass({

  getInitialState: function () {
    return {liked: this.props.liked};
  },

  componentDidMount: function () {
    LikeStore.addChangeHandler(this._onLikeChange);
  },

  componentWillUnmount: function () {
    LikeStore.removeChangeHandler(this._onLikeChange);
  },

  _onLikeChange: function (id, likeClass) {
    if (
      this.props.target.id === id &&
      this.props.likeClass === likeClass
    ) {
      this.setState({ liked: !this.state.liked });
    }
  },

  _handleClick: function (e) {
    e.preventDefault();

    ApiUtil.setLike(
      this.props.likeClass,
      this.props.target.id,
      !this.state.liked
    );
  },

  render: function () {
    var className = this.state.liked ? ' liked' : ' unliked';
    className += (this.props.likeClass === 'Sin' ? ' small' : ' big');
    var text = this.state.liked ? 'Unlike' : 'Like';
    return (
      <button onClick={this._handleClick} className={'like-button' + className}>
      </button>
    );
  }
});

module.exports = LikeButton;
