ApiUtil = {
  fetchSins: function (boardIds, offset, callback) {
    offset = offset || 0;
    $.ajax({
      url: '/api/sins',
      type: 'GET',
      data: { boardIds: boardIds, offset: offset },
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllSins(data, boardIds);
        if (!!callback) {
          callback();
        }
      }
    });
  },

  fetchExtraSins: function (boardIds, offset, callback) {
    $.ajax({
      url: '/api/sins',
      type: 'GET',
      data: { boardIds: boardIds, offset: offset },
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveExtraSins(data, boardIds);
        if (!!callback) {
          callback();
        }
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

  createSin: function (formData, callback) {
    $.ajax({
      url: '/api/sins',
      type: 'POST',
      dataType: 'json',
      processData: false,
      contentType: false,
      data: formData,
      success: function (data) {
        ApiActions.receiveSingleSin(data);
        if (callback) {
          callback(data.boards[0].id);
        }
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
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
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
      }
    });
  },

  fetchBoards: function (user) {
    $.ajax({
      url: '/api/boards',
      type: 'GET',
      data: { user: user },
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

  createBoard: function (board, callback) {
    $.ajax({
      url: 'api/boards',
      type: 'POST',
      dataType: 'json',
      data: { board: board },
      success: function (data) {
        ApiActions.receiveSingleBoard(data);
        if (callback) {
          callback(data.id);
        }
      },
      error: function (data) {
        ApiActions.receiveErrors(data.responseJSON);
      }
    });
  },

  setLike: function (type, id, liked) {
    $.ajax({
      url: 'api/likes',
      type: 'POST',
      dataType: 'json',
      data: { like: {id: id, type: type, liked: liked} },
      success: function (data) {
        ApiActions.setLike(data);
      }
    });
  },

  setFollow: function (type, id, followed) {
    $.ajax({
      url: 'api/follows',
      type: 'POST',
      dataType: 'json',
      data: { follow: {id: id, type: type, followed: followed} },
      success: function (data) {
        ApiActions.setFollow(data);
      }
    });
  }
};
