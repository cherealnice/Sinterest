(function(root) {
  root.UserShow = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        user: UsersStore.findUserById(parseInt(this.props.params.id))
      };
    },

    componentDidMount: function() {
      UsersStore.addChangeHandler(this._onChange);
      UsersApiUtil.fetchUser(this.props.params.id);
    },

    componentWillUnmount: function() {
      UsersStore.removeChangeHandler(this._onChange);
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    render: function() {
      var content;
      var user = this.state.user;
      if (!user) {
        content = (
            <p>There doesn't seem to be a user here.</p>
        );
      } else {
        content = (
          <BoardsIndex user={this.state.user} />
        );
      }

      return (
        <div className="user-wrapper">
          <SinterestHeader
            title={user.username}
            button={followButton} />
          <section className="user-boards-index">
            <BoardsIndex boardIds={user.id} />
          </section>
        </div>
      );
    }
  });
})(this);
