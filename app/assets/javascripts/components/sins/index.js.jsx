(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      var detailSinId = this.props.detailSinId || null;
      return ({ sins: SinStore.all(), detailSinId: detailSinId });
    },

    componentDidMount: function () {
      var store = SinStore;
      store.on(store.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      var boardIds = this.props.boardIds;
      ApiUtil.fetchSins(boardIds);
      this._checkParams();
    },

    componentWillReceiveProps: function (newProps) {
      var detailSinId = null;
      if (newProps.detailSinId) {
        detailSinId = parseInt(newProps.detailSinId);
      }

      this.setState({ detailSinId: detailSinId });
    },

    componentWillUnmount: function () {
      var store = SinStore;
      store.removeListener(store.SINS_CHANGE_EVENT,
                              this._onSinsIndexChange);
    },

    _checkParams: function () {
      if (this.props.sinId) {
        var detailSinId = parseInt(this.props.sinId);
        this.setState({ detailSinId: detailSinId });
      }
    },

    _onSinsIndexChange: function (changeType) {
      if (changeType === this.props.id) {
        this.setState({ sins: SinStore.all() });
      }
    },

    render: function () {
      var detailSinId = this.state.detailSinId;
      var sinShow;
      var indexHiddenClass;
      if (detailSinId) {
        sinShow = <SinShow className='sin-show' key={detailSinId} sinId={detailSinId} />;
        indexHiddenClass = ' hidden';
      }
      return (
        <div className='sin-index'>
          <div>
            <ul id='sins-container' className={"sins group " + indexHiddenClass}>
              {this.state.sins.map(function (sin) {
                return <SinIndexItem
                  sin={sin}
                  key={sin.id}/>;
              }.bind(this))}
            </ul>
          </div>
          {sinShow}
        </div>
      );
    }
  });



}(this));
