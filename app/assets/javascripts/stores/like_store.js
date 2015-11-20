(function (root) {

  var LIKE_CHANGE = 'LIKE_CHANGE';

  root.LikeStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(LIKE_CHANGE, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(LIKE_CHANGE, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case LikeConstants.LIKE_CHANGED:
          LikeStore.emit(
            LIKE_CHANGE,
            payload.like.likeable_id,
            payload.like.likeable_type
          );
          break;
      }
    })
  });
}(this));
