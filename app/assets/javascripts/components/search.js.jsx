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
      this.setState({ results: SearchResultsStore.results() });
    },

    _onInput: function (e) {
      e.preventDefault();
      if (e.currentTarget.value !== '') {
        SearchApiUtil.search(e.currentTarget.value);
      }
      this.setState({string: e.currentTarget.value});
    },

    render: function() {
      var results = SearchResultsStore.results().map(function (result) {
        if (result._type === "Board") {
          boards.push(result);
        } else if (result._type === "Sin") {
          sins.push(result);
        } else if (result._type === "User") {
          users.push(result);
        }
      });

      return (
        <div>
          <input type="text"
            onChange={ this._onInput }
            placeholder="Search..."
          />

          <ul className="search-results">
            <SearchResultsIndex results={results} />
          </ul>
        </div>
      );
    },

  });
})(this);
