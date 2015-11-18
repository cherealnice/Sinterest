ApiUtil = {
  fetchSins: function (boardIds) {
    $.ajax({
      url: '/api/sins',
      type: 'GET',
      data: { boardIds: boardIds },
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
  },

  createComment: function (comment) {
    $.ajax({
      url: 'api/comments',
      type: 'POST',
      dataType: 'json',
      data: { comment: comment },
      success: function (data) {
        ApiActions.receiveSingleComment(data);
      }
    });
  },

  fetchBoards: function () {
    $.ajax({
      url: '/api/boards',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllBoards(data);
      }
    });
  },

  fetchSingleBoard: function (boardId) {
    $.ajax({
      url: '/api/boards/' + boardId,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveSingleBoard(data);
      }
    });
  },

  createBoard: function (board) {
    $.ajax({
      url: 'api/boards',
      type: 'POST',
      dataType: 'json',
      data: { board: board },
      success: function (data) {
        ApiActions.receiveSingleBoard(data);
      }
    });
  }
};
