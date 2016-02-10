var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _currentUser = {};

var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.currentUserBoards = function () {
  return _currentUser.boards;
};

CurrentUserStore.isLoggedIn = function () {
  return (typeof _currentUser.id !== "undefined");
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      _currentUser = payload.currentUser;
      CurrentUserStore.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
