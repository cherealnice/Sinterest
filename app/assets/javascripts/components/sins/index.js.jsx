(function (root) {

  root.SinsIndex = React.createClass({

    getInitialState: function () {
      return ({ sins: SinStore.all(), detailSinId: null });
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      var boardIds = this.props.boardIds || [];
      ApiUtil.fetchSins(boardIds);
      this._checkParams();

    },

    componentWillReceiveProps: function (newProps) {
      var detailSinId = null;
      if (newProps.params) {
        if (newProps.params.sinId) {
          detailSinId = parseInt(newProps.params.sinId);
        }

        this.setState({ detailSinId: detailSinId });
      }
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SINS_CHANGE_EVENT,
                              this._onSinsIndexChange);
    },

    _checkParams: function () {
      if (this.props.params) {
        var detailSinId = parseInt(this.props.params.sinId);
        this.setState({ detailSinId: detailSinId });
      }
    },

    _onSinsIndexChange: function () {
      this.setState({ sins: SinStore.all() });
    },

    _onModalKeydown: function (e) {
    },

    render: function () {
      var detailSinId = this.state.detailSinId;
      var sinShow;
      var indexHiddenClass;
      if (detailSinId) {
        sinShow = (
          <SinShow className='sin-show'
            key={detailSinId}
            sinId={detailSinId}
            onKeyDown={this._onModalKeydown}/>
        );
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
            <SinForm />
          </div>
          {sinShow}
        </div>
      );
    }
  });



}(this));
