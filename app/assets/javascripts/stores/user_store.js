(function (root) {
  var _users = [];

  var _addUser = function (newUser) {
    _users.unshift(newUser);
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    USER_DETAIL_CHANGE: "user-detail-change",
    USER_INDEX_CHANGE: "user-index-change",

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _users.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case UserConstants.RECEIVE_USERS:
          _users = payload.users;
          UserStore.emit(UserStore.USER_INDEX_CHANGE);
          break;

        case UserConstants.RECEIVE_USER:
          _addUser(payload.user);
          UserStore.emit(UserStore.USER_DETAIL_CHANGE);
          break;
      }
    }),

    findUserById: function (id) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id === id) {
          return _users[i];
        }
      }

      return;
    }
  });
})(this);
