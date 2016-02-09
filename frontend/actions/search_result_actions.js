var SearchResultConstants = require('../constants/search_result_constants');

var SearchResultActions = {

  receiveResults: function (results) {
    AppDispatcher.dispatch({
      actionType: SearchResultConstants.RECEIVE_RESULTS,
      results: results
    });
  }
};

module.exports = SearchResultActions;
