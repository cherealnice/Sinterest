var SinConstants = require('../constants/sin_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _boards = [];

var resetBoards = function (boards) {
  _boards = boards;
};

var updateBoard = function (board) {
  var switched = false;
  _boards.forEach(function (b) {
    if(b.id === board.id) {
      _boards[_boards.indexOf(b)] = board;
      switched = true;
    }
  });
  if(!switched) { _boards.push(board); }
};


var BoardStore  = new Store(AppDispatcher);

BoardStore.BOARDS_CHANGE_EVENT = 'boards_change';
BoardStore.BOARD_DETAIL_CHANGE_EVENT = 'board_detail_change';

BoardStore.all = function () {
  return _boards.slice();
};

BoardStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetBoards(payload.boards);
      BoardStore.emit(BoardStore.BOARDS_CHANGE_EVENT);
      break;
    case BoardConstants.BOARD_RECEIVED:
      updateBoard(payload.board);
      BoardStore.emit(BoardStore.BOARD_DETAIL_CHANGE_EVENT);
      break;
  }
});

BoardStore.find = function (boardId) {
  var board;
  _boards.forEach(function (_board) {
    if (_board.id === boardId) {
      board = _board;
    }
  });

  return board;
};

module.exports = BoardStore;
