var React = require('react/addons');
var ReactRouter = require('react-router');
var FollowButton = require('./../buttons/follow_button');

var SinterestHeader = require('./../pages/sinterest_header');
var BoardsIndex = require('./../boards/index');

var UserShow = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
      return { user: UserStore.findUserById(parseInt(this.props.params.id)) };
  },

  componentDidMount: function() {
    UserStore.on(UserStore.USER_DETAIL_CHANGE, this._onChange);
    UsersApiUtil.fetchUser(this.props.params.id);
  },

  componentWillUnmount: function() {
    UserStore.removeListener(UserStore.USER_DETAIL_CHANGE, this._onChange);
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  render: function() {
    var content;
    var user = this.state.user;
    var username;
    if (!user) {
      content = (
          <p>There does not seem to be a user here.</p>
      );
    } else {
      content = (
        <div>
          <section className="user-boards-index">
            <BoardsIndex user={this.state.user} />
          </section>
        </div>
      );
      username = user.username;
    }

    return (
      <div className="user-wrapper">
        <SinterestHeader
          title={username}
          button={FollowButton}
          user={user} />
          { content }
      </div>
    );
  }
});

module.exports = UserShow;
