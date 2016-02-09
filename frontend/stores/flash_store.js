var FlashConstants = require('../constants/flash_constants');

var _flash = [];

var resetFlash = function (flash) {
  _flash = flash;
};

FlashStore = $.extend({}, EventEmitter.prototype, {
  FLASH_CHANGE_EVENT: 'flash_change',

  all: function () {
    return _flash.slice();
  },

  dispatcherID: AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case FlashConstants.ERRORS_RECEIVED:
        resetFlash(payload.flash);
        FlashStore.emit(FlashStore.FLASH_CHANGE_EVENT);
        setTimeout(function(){
          resetFlash([]);
          FlashStore.emit(FlashStore.FLASH_CHANGE_EVENT);
        }, 3000);
        break;
    }
  })
});


module.exports = FlashStore;
