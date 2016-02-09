var React = require('react');
var ReactRouter = require('react-router');
var SessionsApiUtil = require('../../util/sessions_api_util');

var Link = ReactRouter.Link;

var SessionForm = React.createClass({
  mixins: [ReactRouter.History],

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState(null, "/");
    }.bind(this));
  },

    loginGuest: function (e) {
      e.preventDefault();
      var credentials = {email: 'guest@guest.io', password: 'password'};
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState(null, "/");
      }.bind(this));
    },



  render: function() {

    return (
      <div className='page'>
        <div className='login-container group'>
          <Link to='/user/new'>Sign Up</Link>
          <form className='login-form' onSubmit={this.submit}>

            <input
              id="user_email"
              type="text"
              name="email"
              placeholder="Email"/>


            <input
              type="password"
              name="password"
              placeholder="Password"/>

            <button>Log In!</button>
          </form>

            <button
              className='guest-login' onClick={this.loginGuest}>
                Log In As Guest
              </button>

        </div>


      </div>
    );
  },

});

module.exports = SessionForm;
