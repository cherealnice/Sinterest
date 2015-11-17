(function (root) {

  root.SinShow = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { sin: SinStore.find(parseInt(this.props.params.sinId)) };
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    componentWillReceiveProps: function (newProps) {
      var sinId = parseInt(newProps.params.sinId);
      ApiUtil.fetchSingleSin(sinId);
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
      var sinId = parseInt(this.props.params.sinId);
      ApiUtil.fetchSingleSin(sinId);
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
    },

    render: function () {
      var sin = this.state.sin;
      var print;
      if (sin) {
        print = (
        <div>
          <h1>{sin.title}</h1>
          <p>{sin.description}</p>
          <a href={sin.link}>Go to link</a>
        </div>
        );
      }
      return (
        <div className="sin-detail">
          {print}
        </div>
      );
    }
  });


}(this));
