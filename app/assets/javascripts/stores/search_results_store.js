(function (root) {
  var _search_results = {results: []};
  var SEARCH_RESULTS_CHANGE = "search-results-change";

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(SEARCH_RESULTS_CHANGE, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(SEARCH_RESULTS_CHANGE, callback);
    },

    results: function () {
      return _search_results.results;
    },

    totalCount: function () {
      return _search_results.total_count || 0;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case SearchResultConstants.RECEIVE_RESULTS:
          _search_results = payload.results;
          SearchResultsStore.emit(SEARCH_RESULTS_CHANGE);
          break;

      }
    }),

  });
})(this);
