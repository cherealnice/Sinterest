var FlashConstants = require('../constants/flash_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _flash = [];

var resetFlash = function (flash) {
  _flash = flash;
};

var FlashStore = new Store(AppDispatcher);

FlashStore.FLASH_CHANGE_EVENT = 'flash_change';

FlashStore.all = function () {
  return _flash.slice();
};

FlashStore.dispatcherID = AppDispatcher.register(function (payload) {
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
});


module.exports = FlashStore;
