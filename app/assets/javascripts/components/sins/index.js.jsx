(function (root) {

  root.SinsIndex = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      var detailSinId = this.props.detailSinId || null;
      return ({
        loadingFlag: true,
        sins: SinStore.all(),
        detailSinId: detailSinId
      });
    },

    componentDidMount: function () {
      root.addEventListener("scroll", this.handleScroll);
      var store = SinStore;
      store.on(store.SINS_CHANGE_EVENT, this._onSinsIndexChange);
      this.fetchSins();
      this._checkParams();
    },

    componentWillUnmount: function () {
      var store = SinStore;
      store.removeListener(store.SINS_CHANGE_EVENT,
                              this._onSinsIndexChange);
      root.removeEventListener("scroll", this.handleScroll);

    },

    fetchSins: function () {
      var boardIds = this.props.boardIds;
      var offset = this.state.sins.length;
      ApiUtil.fetchSins(boardIds, offset, this.toggleLoadingFlag);
    },

    handleScroll: function(e){
      var scrollHeight = root.document.body.scrollHeight;
      var inHeight = root.innerHeight;
      var scrollT = $(root).scrollTop();
      var totalScrolled = scrollT+inHeight;

      if(totalScrolled + 50 > scrollHeight){
        if(!this.state.loadingFlag){
          this.fetchSins();
          this.toggleLoadingFlag();
        }
      }
    },

    toggleLoadingFlag: function () {
      this.setState({ loadingFlag: !this.state.loadingFlag });
    },

    componentWillReceiveProps: function (newProps) {
      var detailSinId = null;
      if (newProps.detailSinId) {
        detailSinId = parseInt(newProps.detailSinId);
      }

      this.setState({ detailSinId: detailSinId });
    },

    _checkParams: function () {
      if (this.props.sinId) {
        var detailSinId = parseInt(this.props.sinId);
        this.setState({ detailSinId: detailSinId });
      }
    },

    componentDidUpdate: function () {
      var $container = $('.sins:last');
      $container.imagesLoaded( function () {
        $container.masonry({itemSelector : '.sin', columnWidth: 220 });
      });
    },

    _onSinsIndexChange: function (changeType) {
      if (changeType === this.props.id) {
        this.setState({ sins: SinStore.all() });
      }
    },

    _onChange: function () {
      var $container = $('.sins:last');
      $container.imagesLoaded( function () {
        $container.masonry({itemSelector : '.sin', columnWidth: 220 });
      });
    },

    _handleKeyDown: function (e) {
      if (e.keyCode === 27) {
        this.setState({ detailSinId: null });
      }
    },

    render: function () {
      var detailSinId = this.state.detailSinId;
      var sinShow;
      var indexHiddenClass;
      var createSin;

      if (this.props.createSin) {
        createSin = this.props.createSin;
      }
      if (detailSinId) {
        sinShow = <SinShow
          className='sin-show'
          key={detailSinId}
          sinId={detailSinId}
          _onKeyDown={this._handleKeyDown} />;
        indexHiddenClass = ' hidden';
      }
      return (
        <div className='sin-index'>
        {createSin}
          <div>
            <ul id='sins-container' className={"sins group " + indexHiddenClass}>
              {this.state.sins.map(function (sin) {
                return <SinIndexItem
                  sin={sin}
                  key={sin.id} />;
              }.bind(this))}
            </ul>
          </div>
          {sinShow}
        </div>
      );
    }
  });



}(this));
