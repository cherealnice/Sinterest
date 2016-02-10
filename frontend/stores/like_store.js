var LikeConstants = require('../constants/like_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var LikeStore = new Store(AppDispatcher);

LikeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKE_CHANGED:
      LikeStore.__emitChange();
      break;
  }
};

module.exports = LikeStore;
