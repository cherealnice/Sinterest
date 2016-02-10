var FollowConstants = require('../constants/follow_constants');
var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _follows = {Board: {}, User: {}};

var FollowStore = new Store(AppDispatcher);

FollowStore.updateFollow = function (follow) {
  var type;
  if (follow.followable_type === 'Board') {
    type = 'Board';
  } else if (follow.followable_type === 'User') {
    type = 'User';
  }
  _follows[type][follow.followable_id] = follow.bool;
};

FollowStore.all = function () {
  return Object.assign({}, _follows);
};

FollowStore.setFollows = function (follows) {
  follows.followed_boards.forEach(function (board) {
    _follows.Board[board.id] = true;
  });
  follows.followed_users.forEach(function (user) {
    _follows.User[user.id] = true;
  });
};

FollowStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FollowConstants.FOLLOW_CHANGED:
      FollowStore.updateFollow(payload.follow);
      FollowStore.__emitChange();
      break;
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      FollowStore.setFollows(payload.currentUser.follows);
      FollowStore.__emitChange();
      break;
  }
};

module.exports = FollowStore;
