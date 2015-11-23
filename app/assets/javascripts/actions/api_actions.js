ApiActions = {
  receiveAllSins: function (sins, boardIds) {
    AppDispatcher.dispatch({
      actionType: SinConstants.SINS_RECEIVED,
      sins: { sins: sins, boardIds: boardIds }
    });
  },

  receiveSingleSin: function (sin) {
    AppDispatcher.dispatch({
      actionType: SinConstants.SIN_RECEIVED,
      sin: sin
    });
  },

  receiveSingleComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  receiveAllBoards: function (boards) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARDS_RECEIVED,
      boards: boards
    });
  },

  receiveSingleBoard: function (board) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARD_RECEIVED,
      board: board
    });
  },

  setLike: function (like) {
    AppDispatcher.dispatch({
      actionType: LikeConstants.LIKE_CHANGED,
      like: like
    });
  },

  setFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_CHANGED,
      follow: follow
    });
  },
};
