(function(root){

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

  root.ShowIndexStore = $.extend({}, EventEmitter.prototype, {

    SINS_CHANGE_EVENT: 'show_index_sins_change',
    SIN_DETAIL_CHANGE_EVENT: 'show_index_sin_detail_change',

    all: function () {
      return _sins.slice();
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SinConstants.SINS_RECEIVED:
          if (payload.sins.boardIds && payload.sins.boardIds.length > 0) {
            resetSins(payload.sins.sins);
            ShowIndexStore.emit(ShowIndexStore.SINS_CHANGE_EVENT);
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
})(this);
