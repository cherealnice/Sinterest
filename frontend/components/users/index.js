var React = require('react');
var ReactRouter = require('react-router');
var UsersApiUtil = require('../../util/users_api_util');
var UserStore = require('../../stores/user_store');

var UsersIndex = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { users: UsersStore.all() };
  },

  componentDidMount: function() {
    UserStore.addChangeHandler(this._onChange);
    UsersApiUtil.fetchUsers();
  },

  componentWillUnmount: function() {
    UserStore.removeChangeHandler(this._onChange);
  },

  render: function() {
    var users = this.state.users.map(function (user) {
      return (
        <li key={ user.id }>
          <a href={ "#/users/" + user.id }>
            { user.email }
          </a>
        </li>
      );
    });

    return (
      <div>
        <h1 className="title">Users</h1>

        <ul className="users-index">{ users }</ul>
      </div>
    );
  },

  _onChange: function() {
    this.setState({ users: UserStore.all() });
  }
});

module.exports = UsersIndex;
