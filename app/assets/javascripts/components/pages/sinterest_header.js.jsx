var React = require('react/addons');
var ReactRouter = require('react-router');
var LogoutButton = require('./../buttons/logout_button');

var Search = require('./../search/search');
var Link = ReactRouter.Link;

var SinterestHeader = React.createClass({
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
    var createSin;
    var currentUser = CurrentUserStore.currentUser();
    var user;
    var headerBottom;

    if (this.props.createSin) {
      createSin = this.props.createSin;
    }

    if (this.props.user) {
      user = (
        <Link className='user-show-info group' to={'/users/' + this.props.user.id}>
          <div className='user-thumb user-show-thumb'>
            <img className='user-thumb user-show-thumb' src={this.props.user.image_url} />
          <h3 className='user-show-username'>{this.props.user.username}</h3>
          </div>
        </Link>
      );

      headerBottom = (
      <section className='content-header-bottom'>
        {button}
        {user}
        </section>
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
                    <li>
                      < Link
                        to={'/user/edit'}
                        className={'edit-user-button user-dropdown-button'}
                      >
                        Edit Profile
                      </Link>
                    </li>
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
            {headerBottom}
          </div>
        </header>
        <Link className='fixed-link new-board-link' to={'/board/new'}>
          <div className='new-board-dropdown-container'>
            <div className='new-board-dropdown link-dropdown'>
              Create a board
            </div>
            <div className='tooltip tooltip-new-board' />
          </div>
        </Link>
        <Link className='fixed-link view-boards-link' to={'/boards'}>
        <div className='all-boards-dropdown-container'>
          <div className='all-boards-dropdown link-dropdown'>
            View all boards
          </div>
          <div className='tooltip tooltip-all-boards' />
        </div>
        </Link>
      </div>
    );
  }
});

module.exports = SinterestHeader;
