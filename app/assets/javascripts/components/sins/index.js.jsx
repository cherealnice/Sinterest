(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      return ({ sins: SinStore.all() });
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      var boards = this.props.boards || [];
      ApiUtil.fetchSins(boards);
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SINS_CHANGE_EVENT,
                              this._onSinsIndexChange);
    },

    _onSinsIndexChange: function () {
      this.setState({ sins: SinStore.all() });
    },

    render: function () {
      return (
        <div>
          <ul className="sins group">
            {this.state.sins.map(function (sin) {
              return <SinIndexItem sin={sin} key={sin.id} />;
            })}
          </ul>

          <SinForm />
        </div>
      );
    }
  });



}(this));
