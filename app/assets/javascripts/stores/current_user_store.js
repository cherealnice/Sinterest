(function (root) {
  var CURRENT_USER_CHANGE = "current-user-change";

  var _currentUser = {};

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CURRENT_USER_CHANGE, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CURRENT_USER_CHANGE, callback);
    },

    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    currentUserBoards: function () {
      return _currentUser.boards;
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CURRENT_USER_CHANGE);
          break;
      }
    }),
  });
})(this);
