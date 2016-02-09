var SinConstants = require('../constants/sin_constants');
var CommentConstants = require('../constants/comment_constants');
var BoardConstants = require('../constants/board_constants');
var Follow = require('../constants/follow_constants');
var LikeConstants = require('../constants/like_constants');
var FlashConstants = require('../constants/flash_constants');


var ApiActions = {
  receiveAllSins: function (sins, boardIds) {
    AppDispatcher.dispatch({
      actionType: SinConstants.SINS_RECEIVED,
      sins: { sins: sins, boardIds: boardIds }
    });
  },

  receiveExtraSins: function (sins, boardIds) {
    AppDispatcher.dispatch({
      actionType: SinConstants.EXTRA_SINS_RECEIVED,
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

  receiveErrors: function (flash) {
    AppDispatcher.dispatch({
      actionType: FlashConstants.ERRORS_RECEIVED,
      flash: flash
    });
  }
};

module.exports = ApiActions;
