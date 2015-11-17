(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      return ({ sins: SinStore.all() });
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SINS_CHANGE_EVENT, this.onSinsIndexChange);
      ApiUtil.fetchSins();
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SINS_CHANGE_EVENT,
                              this.onSinsIndexChange);
    },

    onSinsIndexChange: function () {
      this.setState({ sins: SinStore.all() });
    },

    render: function () {
      return (
        <ul className="sins">
          {this.state.sins.map(function (sin) {
            return <SinsIndexItem sin={sin} key={sin.id} />;
          })}
        </ul>
      );
    }
  });



}(this));
