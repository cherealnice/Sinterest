(function (root) {

  var Link = ReactRouter.Link;

  root.SearchResultsIndex = React.createClass({

    getInitialState: function () {
      return({ results: this.props.results });
    },

    componentWillReceiveProps: function () {
      this.setState({ results: this.props.results });
    },

    render: function () {
      var results = this.state.results;
      var boards = [];
      var sins = [];
      var users = [];
      var text;

      results.map(function (result) {
        if (result._type === "Board") {
          boards.push(result);
        } else if (result._type === "Sin") {
          sins.push(result);
        } else if (result._type === "User") {
          users.push(result);
        }
      });

      if (results.length > 0) {
        return (
          <ul className="search-results">
            <li>
              <li><h5>Boards</h5></li>
              {boards.map(function (b) {
                return(
                  <li id='board-search-results'>
                    <Link to={'/boards/' + b.id}>
                      <h5>{b.title}</h5>
                      <p>{b.description}</p>
                    </Link>
                  </li>
                );
              })}
            </li>

            <li>
              <li><h5>Sins</h5></li>
              {sins.map(function (s) {
                return(
                  <li id='sin-search-results'>
                    <Link to={'/sins/' + s.id}>
                      <h5>{s.title}</h5>
                      <p>{s.description}</p>
                      <img src={s.image_url} />
                    </Link>
                  </li>
                );
              })}
            </li>

            <li>
              <li><h5>Users</h5></li>
              {users.map(function (u) {
                return(
                  <li id='user-search-results'>
                    <Link to={'/users/' + u.id}>
                      <h5>{u.title}</h5>
                      <p>{u.description}</p>
                      <img src={u.image_url} />
                    </Link>
                  </li>
                );
              })}
            </li>
          </ul>
        );
      }

      return (
        <li className='search-results' />
      );
    }
  });
})(this);
