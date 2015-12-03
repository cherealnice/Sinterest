var React = require('react/addons');
var ReactRouter = require('react-router');

var SinIndexItem = require('./index_item');
var SinShow = require('./show');

var Masonry = require('react-masonry-component')(React);

var masonryOptions = {
  transitionDuration: '0.2s',
  itemSelector: '.sin',
  columnWidth: '.sin'
};

var SinsIndex = React.createClass({
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
    window.addEventListener("scroll", this.handleScroll);
    var store = SinStore;
    store.on(store.SINS_CHANGE_EVENT, this._onSinsIndexChange);
    this.fetchSins();
    this._checkParams();
  },

  componentWillUnmount: function () {
    var store = SinStore;
    store.removeListener(store.SINS_CHANGE_EVENT,
                            this._onSinsIndexChange);
    window.removeEventListener("scroll", this.handleScroll);

  },

  fetchSins: function () {
    var boardIds = this.props.boardIds;
    var offset = this.state.sins.length;
    ApiUtil.fetchSins(boardIds, offset, this.toggleLoadingFlag);
  },

  handleScroll: function(e){
    var scrollHeight = document.body.scrollHeight;
    var inHeight = window.innerHeight;
    var scrollT = $(window).scrollTop();
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

  // componentDidUpdate: function () {
  //   var $container = $('.sins:last');
  //   $container.imagesLoaded( function () {
  //     $container.masonry({itemSelector : '.sin', columnWidth: 220 });
  //   });
  // },

  _onSinsIndexChange: function (changeType) {
    if (changeType === this.props.id) {
      this.setState({ sins: SinStore.all() });
    }
  },
  //
  // _onChange: function () {
  //   var $container = $('.sins:last');
  //   $container.imagesLoaded( function () {
  //     $container.masonry({itemSelector : '.sin', columnWidth: 220 });
  //   });
  // },

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

        <Masonry
          className={'my-gallery-class sins group ' + indexHiddenClass}
          id='sins-container'
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          {this.state.sins.map(function (sin) {
            return <SinIndexItem
              sin={sin}
              key={sin.id} />;
          }.bind(this))}
        </Masonry>
        </div>
        {sinShow}
      </div>
    );
  }
});


module.exports = SinsIndex;
