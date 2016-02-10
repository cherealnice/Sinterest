var FlashConstants = require('../constants/flash_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _flash = [];

var resetFlash = function (flash) {
  _flash = flash;
};

var FlashStore = new Store(AppDispatcher);

FlashStore.all = function () {
  return _flash.slice();
};

FlashStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FlashConstants.ERRORS_RECEIVED:
      resetFlash(payload.flash);
      FlashStore.__emitChange();
      setTimeout(function(){
        resetFlash([]);
        FlashStore.__emitChange();
      }, 3000);
      break;
  }
};


module.exports = FlashStore;
