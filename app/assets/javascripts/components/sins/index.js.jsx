(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      return ({ sins: SinStore.all() });
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      ApiUtil.fetchSins();
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
          <ul className="sins">
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
