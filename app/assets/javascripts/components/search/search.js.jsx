(function(root) {
  root.Search = React.createClass({

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
      if (e.currentTarget.value !== '') {
        SearchApiUtil.search(e.currentTarget.value);
      }
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
        <SearchResultsIndex key={results.length} results={results} />
        </div>
      );
    },

  });
})(this);
