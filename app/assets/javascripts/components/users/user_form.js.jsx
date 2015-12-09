var React = require('react/addons');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var UserForm = React.createClass({
  mixins: [ReactRouter.History],

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
    UsersApiUtil.createUser(credentials, function () {
      this.history.pushState(null, "/");
    }.bind(this));
  },

  render: function() {

    return (
      <div className='page'>
        <div className='login-container group'>
          <Link to='/login'>Log In</Link>
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

            <button>Sign Up!</button>
          </form>
        </div>
      </div>
    );
  },

});

module.exports = UserForm;
