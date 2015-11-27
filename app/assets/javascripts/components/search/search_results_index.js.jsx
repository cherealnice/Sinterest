(function (root) {

  var Link = ReactRouter.Link;

  root.SearchResultsIndex = React.createClass({

    getInitialState: function () {
      return({ results: this.props.results });
    },

    componentWillReceiveProps: function () {
      this.setState({ results: this.props.results });
    },

    _handleClick: function (e) {
      if (e.currentTarget.className === "search-results group") {
        this.setState({ results: [] });
      }
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
          <div className="search-results group">
            <div className='boards-results class-result group'  onClick={this._handleClick}>
              <div className='class-title'><h5>Boards</h5></div>
              {boards.map(function (b) {
                return(
                  <div id='search-results' className='group'>
                    <Link to={'/boards/' + b.id}>
                      <div className='result-info'>
                        <h5>{b.title}</h5>
                        <p>{b.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className='sins-results class-result'>
              <div className='class-title'><h5>Sins</h5></div>
              {sins.map(function (s) {
                return(
                  <div id='search-results' className='group'>
                    <Link to={'/sins/' + s.id}>
                      <div className='result-info'>
                        <h5>{s.title}</h5>
                        <p>{s.description}</p>
                      </div>
                      <img src={s.image_url} />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className='users-results class-result'>
              <div className='class-title'><h5>Users</h5></div>
              {users.map(function (u) {
                var name;
                if (u.fname || u.lname) {
                  name = u.fname + " " + u.lname;
                }
                return(
                  <div id='search-results' className='group'>
                    <Link to={'/users/' + u.id}>
                      <div className='result-info'>
                        <h5>{u.username}</h5>
                        <p>{name}</p>
                      </div>
                      <img src={u.image_url} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      return (
        <div/>
      );
    }
  });
})(this);
