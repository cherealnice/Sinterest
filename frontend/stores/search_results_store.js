var SearchResultConstants = require('../constants/search_result_constants');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var _search_results = {results: []};

var SearchResultsStore = new Store(AppDispatcher);

SearchResultsStore.SEARCH_RESULTS_CHANGE = "search-results-change";

SearchResultsStore.addChangeHandler = function (callback) {
  this.on(SEARCH_RESULTS_CHANGE, callback);
};

SearchResultsStore.removeChangeHandler = function (callback) {
  this.removeListener(SEARCH_RESULTS_CHANGE, callback);
};

SearchResultsStore.all = function () {
  return _search_results.results;
};

SearchResultsStore.totalCount = function () {
  return _search_results.total_count || 0;
};

SearchResultsStore.dispatcherId = AppDispatcher.register(function (payload) {
  switch (payload.actionType) {

    case SearchResultConstants.RECEIVE_RESULTS:
      _search_results = payload.results;
      SearchResultsStore.emit(SEARCH_RESULTS_CHANGE);
      break;

  }
});

module.exports = SearchResultsStore;
