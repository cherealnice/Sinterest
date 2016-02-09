var FollowConstants = require('../constants/follow_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');


var FollowStore = new Store(AppDispatcher);

FollowStore.FOLLOW_CHANGE = 'FOLLOW_CHANGE';

FollowStore.addChangeHandler =function (callback) {
  this.on(FOLLOW_CHANGE, callback);
};

FollowStore.removeChangeHandler = function (callback) {
  this.removeListener(FOLLOW_CHANGE, callback);
};

FollowStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOW_CHANGED:
      FollowStore.emit(
        FollowStore.FOLLOW_CHANGE,
        payload.follow.followable_id,
        payload.follow.followable_type
      );
      break;
  }
});

module.exports = FollowStore;
