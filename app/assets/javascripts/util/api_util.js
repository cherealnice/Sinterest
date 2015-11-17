ApiUtil = {
  fetchSins: function () {
    $.ajax({
      url: '/api/sins',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllSins(data);
      }
    });
  },

  fetchSingleSin: function (sinId) {
    $.ajax({
      url: '/api/sins/' + sinId,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveSingleSin(data);
      }
    });
  },

  createSin: function (sin) {
    $.ajax({
      url: '/api/sins',
      type: 'POST',
      dataType: 'json',
      data: { sin: sin },
      success: function (data) {
        ApiActions.receiveSingleSin(data);
      }
    });
  }
};
