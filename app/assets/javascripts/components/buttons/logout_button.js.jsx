var React = require('react/addons');
var ReactRouter = require('react-router');

var LogoutButton = React.createClass({

  mixins: [ReactRouter.History],

  _handleClick: function (e) {
    e.preventDefault();
    if (CurrentUserStore.isLoggedIn()) {
      SessionsApiUtil.logout();
    } else {
      this.history.pushState(null, "/login");
    }
  },

  render: function () {
    var text = CurrentUserStore.isLoggedIn() ? 'Log Out' : 'Log In';
    return (
      <button
        onClick={this._handleClick}
        className={'logout-button user-dropdown-button'}>
          {text}
      </button>
    );
  }
});

module.exports = LogoutButton;
