var SinConstants = require('../constants/sin_constants');
var CommentConstants = require('../constants/comment_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _comments = [];

var resetComments = function (comments) {
  _comments = comments;
};

var addComment = function (comment) {
  _comments.push(comment);
};

var CommentStore = new Store(AppDispatcher);

CommentStore.all =function () {
  return _comments.slice();
};

CommentStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case SinConstants.SIN_RECEIVED:
      resetComments(payload.sin.comments);
      CommentStore.__emitChange();
      break;
    case CommentConstants.COMMENT_RECEIVED:
      addComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
});


module.exports = CommentStore;
