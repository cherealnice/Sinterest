var SinConstants = require('../constants/sin_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _sins = [];

var resetSins = function (sins) {
  _sins = sins;
};

var updateSin = function (sin) {
  var switched = false;
  _sins.forEach(function (s) {
    if(s.id === sin.id) {
      _sins[_sins.indexOf(s)] = sin;
      switched = true;
    }
  });
  if(!switched) { _sins.push(sin); }
};

var BoardShowIndexStore = new Store(AppDispatcher);

BoardShowIndexStore.all = function () {
  return _sins.slice();
};

BoardShowIndexStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SinConstants.SINS_RECEIVED:
      if (payload.sins.boardIds && payload.sins.boardIds.length > 0) {
        resetSins(payload.sins.sins);
        BoardShowIndexStore.__emitChange();
      }
      break;
  }
};

BoardShowIndexStore.find = function (sinId) {
  var sin;
  _sins.forEach(function (_sin) {
    if (_sin.id === sinId) {
      sin = _sin;
    }
  });

  return sin;
};

module.exports = BoardShowIndexStore;
