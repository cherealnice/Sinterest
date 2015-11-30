var SessionsApiUtil = {
  login: function (credentials, callback) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        console.log("logged in!");
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
        console.log("logged out!");
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
