var UserActions = require('../actions/user_actions');
var CurrentUserActions = require('../actions/current_user_actions');
var ApiActions = require('../actions/api_actions');


var UsersApiUtil = {
  fetchUsers: function () {
    $.ajax({
      url: '/api/users',
      type: 'GET',
      dataType: 'json',
      success: function (users) {
        UserActions.receiveUsers(users);
      }
    });
  },

  fetchUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        UserActions.receiveUser(user);
      }
    });
  },

  createUser: function (attrs, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: { user: attrs },
      success: function (user) {
        UserActions.receiveUser(user);
        CurrentUserActions.receiveCurrentUser(user);
        if (callback) {
          callback();
        }
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
      }
    });
  },

  updateUser: function (formData, callback) {
    $.ajax({
      url: '/api/users',
      type: 'PATCH',
      dataType: 'json',
      processData: false,
      contentType: false,
      data: formData,
      success: function (user) {
        UserActions.receiveUser(user);
        CurrentUserActions.receiveCurrentUser(user);
        if (callback) {
          callback();
        }
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
      }
    });
  }
};


module.exports = UsersApiUtil;
