var UserConstants = require('../constants/user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _users = [];

var _addUser = function (newUser) {
  _users.unshift(newUser);
};

var UserStore = new Store(AppDispatcher);

UserStore.addChangeHandler = function (callback) {
  this.on(CHANGE_EVENT, callback);
};

UserStore.removeChangeHandler = function (callback) {
  this.removeListener(CHANGE_EVENT, callback);
};

UserStore.all = function () {
  return _users.slice();
};

AppDispatcher.__onDispatch = function (payload) {
  switch (payload.actionType) {

    case UserConstants.RECEIVE_USERS:
      _users = payload.users;
      UserStore.__emitChange();
      break;

    case UserConstants.RECEIVE_USER:
      _addUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

UserStore.findUserById = function (id) {
  for (var i = 0; i < _users.length; i++) {
    if (_users[i].id === id) {
      return _users[i];
    }
  }

  return;
};

module.exports = UserStore;
