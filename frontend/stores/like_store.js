var LikeConstants = require('../constants/like_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var LIKE_CHANGE = 'LIKE_CHANGE';

var LikeStore = new Store(AppDispatcher);

LikeStore.addChangeHandler = function (callback) {
  this.on(LIKE_CHANGE, callback);
};

LikeStore.removeChangeHandler = function (callback) {
  this.removeListener(LIKE_CHANGE, callback);
};

LikeStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case LikeConstants.LIKE_CHANGED:
      LikeStore.emit(
        LikeStore.LIKE_CHANGE,
        payload.like.likeable_id,
        payload.like.likeable_type
      );
      break;
  }
});

module.exports = LikeStore;
