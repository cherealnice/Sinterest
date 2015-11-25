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
      return(
        <div>
          <header className='content-header'>
            <div>
              <section className='navbar group' >
                <LogoutButton />
                <input type='text' placeholder='Search...' />
              </section>
              <section className='content-header-top'>
                <div className='header-title group'>
                  <Link className='root-link' to={'/'} />
                  <h1 className='content-header-title'>{title}</h1>
                </div>
                <p className='content-header-desc'>{description}</p>
              </section>
              <section className='content-header-bottom'>
                {button}
                <div className='content-header-user'>
                  <div className='current-user-image'>
                    <img src={currentUser.image_url} />
                  </div>
                  <h3>{currentUser.username}</h3>
                </div>
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
