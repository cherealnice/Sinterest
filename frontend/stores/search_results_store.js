var SearchResultConstants = require('../constants/search_result_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _search_results = {results: []};

var SearchResultsStore = new Store(AppDispatcher);

SearchResultsStore.all = function () {
  return _search_results.results;
};

SearchResultsStore.totalCount = function () {
  return _search_results.total_count || 0;
};

SearchResultsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {

    case SearchResultConstants.RECEIVE_RESULTS:
      _search_results = payload.results;
      SearchResultsStore.__emitChange();
      break;

  }
};

module.exports = SearchResultsStore;
