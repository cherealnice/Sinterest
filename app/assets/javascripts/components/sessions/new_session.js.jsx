var React = require('react/addons')
var ReactRouter = require('react-router');

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


        </div>


      </div>
    );
  },

});

module.exports = SessionForm;
