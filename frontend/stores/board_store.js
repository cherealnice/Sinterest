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

BoardStore.all = function () {
  return _boards.slice();
};

BoardStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetBoards(payload.boards);
      BoardStore.__emitChange();
      break;
    case BoardConstants.BOARD_RECEIVED:
      updateBoard(payload.board);
      BoardStore.__emitChange();
      break;
  }
};

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
