var SinConstants = require('../constants/sin_constants');
var CommentConstants = require('../constants/comment_constants');

var _comments = [];

var resetComments = function (comments) {
  _comments = comments;
};

var addComment = function (comment) {
  _comments.push(comment);
};

var COMMENTS_CHANGE_EVENT = 'comments_change';

CommentStore = $.extend({}, EventEmitter.prototype, {

  all: function () {
    return _comments.slice();
  },

  addChangeHandler: function (callback) {
    this.on(COMMENTS_CHANGE_EVENT, callback);
  },

  removeChangeHandler: function (callback) {
    this.removeListener(COMMENTS_CHANGE_EVENT, callback);
  },

  dispatcherID: AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case SinConstants.SIN_RECEIVED:
        resetComments(payload.sin.comments);
        CommentStore.emit(COMMENTS_CHANGE_EVENT);
        break;
      case CommentConstants.COMMENT_RECEIVED:
        addComment(payload.comment);
        CommentStore.emit(COMMENTS_CHANGE_EVENT);
        break;
    }
  })
});


module.exports = CommentStore;
