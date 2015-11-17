ApiActions = {
  receiveAllSins: function (sins) {
    AppDispatcher.dispatch({
      actionType: SinConstants.SINS_RECEIVED,
      sins: sins
    });
  },

  receiveSingleSin: function (sin) {
    AppDispatcher.dispatch({
      actionType: SinConstants.SIN_RECEIVED,
      sin: sin
    });
  },

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  }
};
