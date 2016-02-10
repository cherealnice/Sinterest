var React = require('react');
var ReactRouter = require('react-router');
var LikeStore = require('../../stores/like_store');
var ApiUtil = require('../../util/api_util');

var LikeButton = React.createClass({

  getInitialState: function () {
    var type = this.props.type;
    var id = this.props.id;
    return { liked: LikeStore.all()[type][id] };
  },

  componentDidMount: function () {
    this.likeStoreToken = LikeStore.addListener(this._onLikeChange);
  },

  componentWillUnmount: function () {
    this.likeStoreToken.remove();
  },

  _onLikeChange: function () {
    var type = this.props.type;
    var id = this.props.id;
    this.setState({ liked: LikeStore.all()[type][id] });
  },

  _handleClick: function (e) {
    e.preventDefault();

    ApiUtil.setLike(
      this.props.type,
      this.props.id,
      !this.state.liked || 'false'
    );
  },

  render: function () {
    var className = this.state.liked ? ' liked' : ' unliked';
    className += (this.props.type === 'Sin' ? ' small' : ' big');
    var text = this.state.liked ? 'Unlike' : 'Like';
    return (
      <button onClick={this._handleClick} className={'like-button' + className}>
      </button>
    );
  }
});

module.exports = LikeButton;
