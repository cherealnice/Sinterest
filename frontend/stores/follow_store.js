var FollowConstants = require('../constants/follow_constants');
var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _follows = {};

var FollowStore = new Store(AppDispatcher);

FollowStore.updateFollow = function (follow) {
  var type;
  if (follow.followable_type === 'Board') {
    type = 'Board';
  } else if (follow.followable_type === 'User') {
    type = 'User';
  }
  _follows[type][follow.followable_id] = follow.followable_bool;
};

FollowStore.setFollows = function (follows) {

};

FollowStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOW_CHANGED:
      FollowStore.updateFollow(payload.follow);
      FollowStore.__emitChange();
      break;
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
    debugger;
      FollowStore.setFollows(payload.currentUser);
      FollowStore.__emitChane();
      break;
  }
};

module.exports = FollowStore;
