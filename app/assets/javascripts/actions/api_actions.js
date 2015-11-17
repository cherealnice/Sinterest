ApiActions = {
  receiveAllSins: function(sins){
    AppDispatcher.dispatch({
      actionType: SinConstants.SINS_RECEIVED,
      sins: sins
    });
  }
};
