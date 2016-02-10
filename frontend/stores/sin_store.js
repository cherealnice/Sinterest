var SinConstants = require('../constants/sin_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _sins = {};

var resetSins = function (sins) {
  _sins = {};
  sins.forEach(function (sin) {
    _sins[sin.id] = sin;
  });
};

var addSins = function (sins) {
  sins.forEach(function (sin) {
    _sins[sin.id] = sin;
  });
};

var updateSin = function (sin) {
  _sins[sin.id] = sin;
};

var SinStore = new Store(AppDispatcher);

SinStore.all = function () {
  var sins = [];
  var keys = Object.keys(_sins);
  keys.forEach(function (key) {
    sins.push(_sins[key]);
  });

  return sins;
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
  return _sins[sinId];
};

module.exports = SinStore;
