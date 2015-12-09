var React = require('react/addons');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var UserEdit = React.createClass({
  mixins: [ReactRouter.History],

  blankAttrs: {
    email: '',
    image: null,
    imageUrl: '',
    password: '',
    fname: '',
    lname: ''
  },

  getInitialState: function () {
    return ({
      attrs: this.blankAttrs
    });
  },

  submit: function (e) {
    e.preventDefault();
    debugger;
    var credentials = this.state.attrs;
    UsersApiUtil.updateUser(credentials, function () {
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
      <div className='page'>
        <div className='login-container group'>
          <form className='edit-form' onSubmit={this.submit}>

            <input
              id="user_email"
              type="text"
              name="email"
              placeholder="New Email" />

            <input
              type="password"
              name="password"
              placeholder="New Password" />

            <input
              id="user_username"
              type="text"
              name="username"
              placeholder="New Username" />

            <input
              id="user_fname"
              type="text"
              name="fname"
              placeholder="First Name" />

            <input
              id="user_lname"
              type="text"
              name="lname"
              placeholder="Last Name" />

            <input
              id="user_image"
              type="file"
              name="image"
              onChange={this._changeFile} />


            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = UserEdit;
