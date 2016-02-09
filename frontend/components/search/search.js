var React = require('react/addons');
var ReactRouter = require('react-router');
var SearchResultsIndex = require('./search_results_index');
var SearchResultsStore = require('../../stores/search_results_store');
var SearchApiUtil = require('../../util/search_api_util');

var Search = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ string: '', results: [] });
  },

  componentDidMount: function () {
    SearchResultsStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    SearchResultsStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ results: SearchResultsStore.all() });
  },

  _onInput: function (e) {
    e.preventDefault();
    SearchApiUtil.search(e.currentTarget.value);
    this.setState({string: e.currentTarget.value});
  },

  render: function() {
    var results = this.state.results;

    return (
      <div>
        <input type="text"
          onChange={ this._onInput }
          placeholder="Search..."
        />
      <SearchResultsIndex
        key={results.length}
        results={results} />
      </div>
    );
  },

});

module.exports = Search;
