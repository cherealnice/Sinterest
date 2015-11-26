(function (root) {

  var Link = ReactRouter.Link;

  root.SinterestHeader = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return ({ currentUser: CurrentUserStore.currentUser() });
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeHandler(this.handleCurrentUserChange);
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeHandler(this.handleCurrentUserChange);
    },

    handleCurrentUserChange: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    render: function () {
      var title = this.props.title;
      var description = this.props.description;
      var button = this.props.button;
      var currentUser = CurrentUserStore.currentUser();
      var user;
      if (this.props.user) {
        user = (
          <Link className='user-show-info group' to={'/users/' + this.props.user.id}>
            <div className='user-thumb user-show-thumb'>
              <img className='user-thumb user-show-thumb' src={this.props.user.image_url} />
            <h3 className='user-show-username'>{this.props.user.username}</h3>
            </div>
          </Link>
        );
      }

      return(
        <div className='app-header'>
          <header className='content-header'>
            <div>
              <section className='navbar group' >
                <Search />
              </section>
              <section className='content-header-top'>
                <div className='content-header-current-user group'>
                  <h3 className='current-user-username'>{currentUser.username}</h3>
                  <div className='user-thumb current-user-image'>
                    <img src={currentUser.image_url} />
                  </div>

                  <div className='current-user-dropdown'>
                    <ul>
                      <li><LogoutButton /></li>
                    </ul>
                  </div>
                </div>
                <div className='content-header-main' >
                  <div className='header-title group'>
                    <Link className='root-link' to={'/'} />
                    <h1 className='content-header-title'>{title}</h1>
                  </div>
                  <p className='content-header-desc'>{description}</p>
                </div>
              </section>
              <section className='content-header-bottom'>
                {button}
                {user}
              </section>
            </div>
          </header>
          <Link className='fixed-link new-board-link' to={'/board/new'} />
          <Link className='fixed-link view-boards-link' to={'/boards'} />
        </div>
      );
    }
  });



})(this);
