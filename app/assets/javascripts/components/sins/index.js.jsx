var React = require('react/addons');
var ReactRouter = require('react-router');
var SinIndexItem = require('./index_item');
var SinShow = require('./show');
var Masonry = require('react-masonry-component')(React);

var masonryOptions = {
  transitionDuration: '0.2s',
  itemSelector: '.sin',
  columnWidth: '.sin',
  isResizable: true
};

var SinsIndex = React.createClass({

  getInitialState: function () {
    return ({
      loadingFlag: false,
      sins: SinStore.all(),
      detailSinId: null
    });
  },

  componentDidMount: function () {
    window.addEventListener("scroll", this.handleScroll);
    SinStore.on(SinStore.SINS_CHANGE_EVENT, this._onSinsIndexChange);
    ApiUtil.fetchSins(this.props.boardIds);
  },

  componentWillUnmount: function () {
    SinStore.removeListener(SinStore.SINS_CHANGE_EVENT,
                            this._onSinsIndexChange);
    window.removeEventListener("scroll", this.handleScroll);

  },

  fetchExtraSins: function () {
    var boardIds = this.props.boardIds;
    var offset = this.state.sins.length;
    ApiUtil.fetchExtraSins(boardIds, offset, this.toggleLoadingFlag);
  },

  handleScroll: function(e){
    var scrollHeight = document.body.scrollHeight;
    var inHeight = window.innerHeight;
    var scrollT = $(window).scrollTop();
    var totalScrolled = scrollT+inHeight;

    if(totalScrolled + 50 > scrollHeight){
      if(!this.state.loadingFlag){
        this.fetchExtraSins();
        this.toggleLoadingFlag();
      }
    }
  },

  toggleLoadingFlag: function () {
    this.setState({ loadingFlag: !this.state.loadingFlag });
  },

  _showSin: function (e) {
    this.setState({ detailSinId: parseInt(e.currentTarget.id) });
  },

  _closeSinShow: function () {
    this.setState({ detailSinId: null });
  },

  _onSinsIndexChange: function (changeType) {
    if (changeType === this.props.id) {
      this.setState({ sins: SinStore.all() });
    }
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
        _onKeyDown={this._handleKeyDown}
        _closeSinShow={this._closeSinShow}
      />;
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
              key={sin.id}
              showSin={this._showSin} />;
          }.bind(this))}
        </Masonry>
        </div>
        {sinShow}
      </div>
    );
  }
});

module.exports = SinsIndex;
