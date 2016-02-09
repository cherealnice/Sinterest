var React = require('react');
var ReactRouter = require('react-router');
var FollowStore = require('../../stores/follow_store');
var ApiUtil = require('../../util/api_util');

var FollowButton = React.createClass({

  getInitialState: function () {
    return {followed: this.props.followed};
  },

  componentDidMount: function () {
    FollowStore.addChangeHandler(this._onFollowChange);
  },

  _onFollowChange: function (id, followClass) {
    if (
      this.props.target.id === id &&
      this.props.followClass === followClass
    ) {
      this.setState({followed: !this.state.followed });
    }
  },

  _handleClick: function (e) {
    e.preventDefault();

    ApiUtil.setFollow(
      this.props.followClass,
      this.props.target.id,
      !this.state.followed
    );
  },

  render: function () {
    var className = this.state.followed ? ' followed' : ' unfollowed';
    var text = this.state.followed ? 'Unfollow' : 'Follow';
    return (
      <button
        onClick={this._handleClick}
        className={'follow-button' + className}>
          {this.state.followed ? 'Unfollow' : 'Follow'}
      </button>
    );
  }
});

module.exports = FollowButton;
