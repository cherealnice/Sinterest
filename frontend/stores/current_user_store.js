var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _currentUser = {};

var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.CURRENT_USER_CHANGE = "current-user-change";

CurrentUserStore.addChangeHandler = function (callback) {
  this.on(CurrentUserStore.CURRENT_USER_CHANGE, callback);
};

CurrentUserStore.removeChangeHandler = function (callback) {
  this.removeListener(CurrentUserStore.CURRENT_USER_CHANGE, callback);
};

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.currentUserBoards = function () {
  return _currentUser.boards;
};

CurrentUserStore.isLoggedIn = function () {
  return (typeof _currentUser.id !== "undefined");
};

CurrentUserStore.dispatcherId = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {

    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      _currentUser = payload.currentUser;
      CurrentUserStore.emit(CurrentUserStore.CURRENT_USER_CHANGE);
      break;
  }
});

module.exports = CurrentUserStore;
