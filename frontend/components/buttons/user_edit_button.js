var React = require('react');
var ReactRouter = require('react-router');

var UserEditButton = React.createClass({

  mixins: [ReactRouter.History],

  _handleClick: function (e) {
    e.preventDefault();
      this.history.pushState(null, "/user/edit");
  },

  render: function () {
    return (
      <button
        onClick={this._handleClick}
        className={'user-edit-button user-dropdown-button'}>
          Edit Profile
      </button>
    );
  }
});

module.exports = UserEditButton;
