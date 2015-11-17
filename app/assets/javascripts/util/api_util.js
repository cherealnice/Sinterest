ApiUtil = {
  fetchSins: function(){
    $.ajax({
      url: '/api/sins',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.receiveAllSins(data);
      }
    });
  }
};
