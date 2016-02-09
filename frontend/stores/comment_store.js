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

CommentStore.COMMENTS_CHANGE_EVENT = 'comments_change';

CommentStore.all =function () {
  return _comments.slice();
};

CommentStore.addChangeHandler = function (callback) {
  this.on(CommentStore.COMMENTS_CHANGE_EVENT, callback);
};

CommentStore.removeChangeHandler = function (callback) {
  this.removeListener(CommentStore.COMMENTS_CHANGE_EVENT, callback);
};

CommentStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case SinConstants.SIN_RECEIVED:
      resetComments(payload.sin.comments);
      CommentStore.emit(CommentStore.COMMENTS_CHANGE_EVENT);
      break;
    case CommentConstants.COMMENT_RECEIVED:
      addComment(payload.comment);
      CommentStore.emit(CommentStore.COMMENTS_CHANGE_EVENT);
      break;
  }
});


module.exports = CommentStore;
