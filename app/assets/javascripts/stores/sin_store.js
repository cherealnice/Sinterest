(function(root){

  var _sins = [];

  var resetSins = function (sins) {
    _sins = sins;
  };

  var updateSin = function (sin) {
    var switched = false;
    _sins.forEach(function (s) {
      if(s.id === sin.id) {
        _sins[_sins.indexOf(s)] = sins;
        switched = true;
      }
    });
    if(!switched) { _sins.push(sin); }
  };

  root.SinStore = $.extend({}, EventEmitter.prototype, {

    SINS_CHANGE_EVENT: 'sins_change',
    SIN_DETAIL_CHANGE_EVENT: 'sin_detail_change',

    all: function(){
      return _sins.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case SinConstants.SINS_RECEIVED:
          resetSins(payload.sins);
          SinStore.emit(SinStore.SINS_CHANGE_EVENT);
          break;
        case SinConstants.SIN_RECEIVED:
          updateSin(payload.sin);
          SinStore.emit(SinStore.SIN_DETAIL_CHANGE_EVENT);
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
