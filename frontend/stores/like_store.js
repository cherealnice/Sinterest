var LikeConstants = require('../constants/like_constants');
var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _likes = {Board: {}, Sin: {}};

var LikeStore = new Store(AppDispatcher);

LikeStore.updateLike = function (like) {
  var type;
  if (like.likeable_type === 'Board') {
    type = 'Board';
  } else if (like.likeable_type === 'Sin') {
    type = 'Sin';
  }
  _likes[type][like.likeable_id] = like.bool;
};

LikeStore.all = function () {
  return Object.assign({}, _likes);
};

LikeStore.setLikes = function (likes) {
  if (!!likes) {
    likes.liked_boards.forEach(function (board) {
      _likes.Board[board.id] = true;
    });
    likes.liked_sins.forEach(function (sin) {
      _likes.Sin[sin.id] = true;
    });
  }
};

LikeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKE_CHANGED:
      LikeStore.updateLike(payload.like);
      LikeStore.__emitChange();
      break;
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      LikeStore.setLikes(payload.currentUser.likes);
      LikeStore.__emitChange();
      break;
  }
};

module.exports = LikeStore;
