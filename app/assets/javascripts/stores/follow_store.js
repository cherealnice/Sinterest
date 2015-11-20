(function (root) {

  var FOLLOW_CHANGE = 'FOLLOW_CHANGE';

  root.FollowStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(FOLLOW_CHANGE, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(FOLLOW_CHANGE, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FollowConstants.FOLLOW_CHANGED:
          FollowStore.emit(
            FOLLOW_CHANGE,
            payload.follow.followable_id,
            payload.follow.followable_type
          );
          break;
      }
    })
  });
}(this));
