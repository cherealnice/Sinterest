var CurrentUserActions = require('../actions/current_user_actions');
var ApiActions = require('../actions/api_actions');


var SessionsApiUtil = {
  login: function (credentials, callback) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        if (callback) {
          callback();
        }
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
      }
    });
  },

  logout: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
        if (callback) {
          callback();
        }
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
      }
    });
  }
};


module.exports = SessionsApiUtil;
