var FollowConstants = require('../constants/follow_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');


var FollowStore = new Store(AppDispatcher);

FollowStore.addChangeHandler =function (callback) {
  this.on(FOLLOW_CHANGE, callback);
};

FollowStore.removeChangeHandler = function (callback) {
  this.removeListener(FOLLOW_CHANGE, callback);
};

FollowStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOW_CHANGED:
      FollowStore.__emitChange();
      break;
  }
};

module.exports = FollowStore;
