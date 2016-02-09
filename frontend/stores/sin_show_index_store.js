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


var SinShowIndexStore = new Store(AppDispatcher);

SinShowIndexStore.SINS_CHANGE_EVENT = 'Sin_show_index_sins_change';
SinShowIndexStore.SIN_DETAIL_CHANGE_EVENT = 'Sin_show_index_sin_detail_change';

SinShowIndexStore.all = function () {
  return _sins.slice();
};

SinShowIndexStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case SinConstants.SINS_RECEIVED:
      if (payload.sins.SinIds && payload.sins.SinIds.length > 0) {
        resetSins(payload.sins.sins);
        SinShowIndexStore.emit(SinShowIndexStore.SINS_CHANGE_EVENT);
      }
      break;
  }
});

SinShowIndexStore.find = function (sinId) {
  var sin;
  _sins.forEach(function (_sin) {
    if (_sin.id === sinId) {
      sin = _sin;
    }
  });

  return sin;
};

module.exports = SinShowIndexStore;
