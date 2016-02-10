var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var SinterestHeader = require('./../pages/sinterest_header');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionsApiUtil = require('../../util/sessions_api_util');
var UsersApiUtil = require('../../util/users_api_util');

var UserEdit = React.createClass({
  mixins: [React.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    email: '',
    image: null,
    imageUrl: '',
    password: '',
    fname: '',
    lname: '',
    username: '',
  },

  getInitialState: function () {
    return ( this.blankAttrs );
  },

  updateAttrs: function () {
    var state = {};
    var currentUser = CurrentUserStore.currentUser();
    state.email = currentUser.email;
    state.fname = currentUser.fname;
    state.lname = currentUser.lname;
    state.username = currentUser.username;

    this.setState(state);
  },

  componentDidMount: function () {
    this.currentUserToken = CurrentUserStore.addListener(this.updateAttrs);
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.currentUserToken.remove();
  },

  submit: function (e) {
    e.preventDefault();
    var user = {};

    var email = this.state.email;
    var password = this.state.password;
    var fname = this.state.fname;
    var lname = this.state.lname;
    var username = this.state.username;
    var image = this.state.image;

    var formData = new FormData();
    formData.append("user[email]", email);
    formData.append("user[password]", password);
    formData.append("user[username]", username);
    formData.append("user[fname]", fname);
    formData.append("user[lname]", lname);
    formData.append("image", image);

    UsersApiUtil.updateUser(formData, function () {
      this.history.pushState(null, "/");
    }.bind(this));
  },

  _changeFile: function(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var form = this;

    reader.onloadend = function() {
      form.setState({ imageUrl: reader.result, image: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  render: function() {

    return (
      <div className='new-form-container'>
      <SinterestHeader title='Edit Profile' />
        <form className='new-form edit-form' onSubmit={this.submit}>

          <label htmlFor='user_email'>Email:</label>
          <input
            id="user_email"
            type="text"
            name="email"
            placeholder="New Email"
            valueLink={this.linkState("email")} />

          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="New Password"
            valueLink={this.linkState("password")} />

          <label htmlFor='user_username'>Username:</label>
          <input
            id="user_username"
            type="text"
            name="username"
            placeholder="New Username"
            valueLink={this.linkState("username")} />

          <label htmlFor='user_fname'>First Name:</label>
          <input
            id="user_fname"
            type="text"
            name="fname"
            placeholder="First Name"
            valueLink={this.linkState("fname")} />

          <label htmlFor='user_lname'>Last Name:</label>
          <input
            id="user_lname"
            type="text"
            name="lname"
            placeholder="Last Name"
            valueLink={this.linkState("lname")} />

          <label htmlFor='user_image'>Profile Photo:</label>
          <input
            id="user_image"
            type="file"
            name="image"
            onChange={this._changeFile} />


          <button>Submit</button>
        </form>
      </div>
    );
  },
});

module.exports = UserEdit;
