var SinConstants = require('../constants/sin_constants');

var _sins = [];

var resetSins = function (sins) {
  _sins = sins;
};

var addSins = function (sins) {
  _sins = _sins.concat(sins);
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

SinStore = $.extend({}, EventEmitter.prototype, {

  SINS_CHANGE_EVENT: 'sins_change',
  SIN_DETAIL_CHANGE_EVENT: 'sin_detail_change',

  all: function () {
    return _sins.slice();
  },

  dispatcherID: AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case SinConstants.SINS_RECEIVED:
        resetSins(payload.sins.sins);
        if (window.location.hash.slice(2, 6) === 'sins') {
          SinStore.emit(SinStore.SINS_CHANGE_EVENT, 'sin-show-index');
        } else {
          SinStore.emit(SinStore.SINS_CHANGE_EVENT, 'main-index');
        }
        break;
      case SinConstants.SIN_RECEIVED:
        updateSin(payload.sin);
        SinStore.emit(SinStore.SIN_DETAIL_CHANGE_EVENT);
        break;
      case SinConstants.EXTRA_SINS_RECEIVED:
        addSins(payload.sins.sins);
        if (window.location.hash.slice(2, 6) === 'sins') {
          SinStore.emit(SinStore.SINS_CHANGE_EVENT, 'sin-show-index');
        } else {
          SinStore.emit(SinStore.SINS_CHANGE_EVENT, 'main-index');
        }
        break;
    }
  }),

  find: function (sinId) {
    var sin;
    _sins.forEach(function (_sin) {
      if (_sin.id === sinId) {
        sin = _sin;
      }
    });

    return sin;
  }
});


module.exports = SinStore;
