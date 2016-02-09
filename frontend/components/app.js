var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserStore = require('../stores/current_user_store');
var SessionsApiUtil = require('../util/sessions_api_util');

var App = React.createClass({

  getInitialState: function () {
    return { currentUser: null };
  },

  mixins: [ReactRouter.History],

  componentWillMount: function () {
    CurrentUserStore.addChangeHandler(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
  },

  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/login");
    }

    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function() {
    if (!this.state.currentUser) {
    }

    return (
      <div className='top-header'>
        <FlashIndex />
        { this.props.children }
      </div>
    );
  },

});

module.exports = App;
