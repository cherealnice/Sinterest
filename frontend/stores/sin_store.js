var SinConstants = require('../constants/sin_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _sins = [];

var resetSins = function (sins) {
  _sins = sins;
};

var addSins = function (sins) {
  sins.forEach(function (sin) {
    if (!_sins.includes(sin)) {
      _sins.push(sin);
    }
  });
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

var SinStore = new Store(AppDispatcher);

SinStore.all = function () {
  return _sins.slice();
};

SinStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SinConstants.SINS_RECEIVED:
      resetSins(payload.sins.sins);
      SinStore.__emitChange();
      break;
    case SinConstants.SIN_RECEIVED:
      updateSin(payload.sin);
      SinStore.__emitChange();
      break;
    case SinConstants.EXTRA_SINS_RECEIVED:
      addSins(payload.sins.sins);
      SinStore.__emitChange();
      break;
  }
};

SinStore.find = function (sinId) {
  var sin;
  _sins.forEach(function (_sin) {
    if (_sin.id === sinId) {
      sin = _sin;
    }
  });

  return sin;
};

module.exports = SinStore;
