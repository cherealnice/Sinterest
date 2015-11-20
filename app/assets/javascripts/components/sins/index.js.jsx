(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      return ({ sins: SinStore.all(), detailSinId: null });
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      var boards = this.props.boards || [];
      ApiUtil.fetchSins(boards);
      this._checkParams();
    },

    componentWillReceiveProps: function (newProps) {
      var detailSinId = parseInt(newProps.params.sinId);
      this.setState({ detailSinId: detailSinId });
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SINS_CHANGE_EVENT,
                              this._onSinsIndexChange);
    },

    _checkParams: function () {
      if (this.props.params.sinId) {
        var detailSinId = parseInt(this.props.params.sinId);
        this.setState({ detailSinId: detailSinId });
      }
    },

    _onSinsIndexChange: function () {
      this.setState({ sins: SinStore.all() });
    },

    render: function () {
      var detailSinId = this.state.detailSinId;
      var sinShow;
      if (detailSinId) {
        sinShow = (
          <SinShow className='sin-show' key={detailSinId} sinId={detailSinId}/>
        );
      }
      return (
        <div>
          <ul className="sins group">
            {this.state.sins.map(function (sin) {
              return <SinIndexItem sin={sin} key={sin.id} />;
            })}
          </ul>
          {sinShow}
          <SinForm />
        </div>
      );
    }
  });



}(this));
