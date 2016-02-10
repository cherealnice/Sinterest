var React = require('react');
var ReactRouter = require('react-router');
var FollowStore = require('../../stores/follow_store');
var ApiUtil = require('../../util/api_util');

var FollowButton = React.createClass({

  getInitialState: function () {
    var type = this.props.type;
    var id = this.props.id;
    return { followed: FollowStore.all()[type][id] };
  },

  componentDidMount: function () {
    this.followStoreToken = FollowStore.addListener(this._onFollowChange);
  },

  componentWillUnmount: function () {
    this.followStoreToken.remove();
  },

  _onFollowChange: function () {
    var type = this.props.type;
    var id = this.props.id;
    this.setState({ followed: FollowStore.all()[type][id] });
  },

  _handleClick: function (e) {
    e.preventDefault();

    ApiUtil.setFollow(
      this.props.type,
      this.props.id,
      !this.state.followed || 'false'
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
