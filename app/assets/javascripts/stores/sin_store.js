(function(root){

  var _sins = [];
  var resetSins = function (sins) {
    _sins = sins;
  };

  root.SinStore = $.extend({}, EventEmitter.prototype, {

    SINS_CHANGE_EVENT: 'sins_change',

    all: function(){
      return _sins.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === SinConstants.SINS_RECEIVED){
        resetSins(payload.sins);
        SinStore.emit(SinStore.SINS_CHANGE_EVENT);
      }
    })
  });
})(this);
