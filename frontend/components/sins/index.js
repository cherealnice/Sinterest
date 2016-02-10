var React = require('react');
var ReactRouter = require('react-router');
var SinIndexItem = require('./index_item');
var SinShow = require('./show');
var Masonry = require('react-masonry-component');
var SinStore = require('../../stores/sin_store');
var ApiUtil = require('../../util/api_util');

var masonryOptions = {
  transitionDuration: '0.2s',
  itemSelector: '.sin',
  columnWidth: '.sin',
  isResizable: true
};

var SinsIndex = React.createClass({

  getInitialState: function () {
    return ({
      loadingFlag: true,
      sins: [],
      detailSinId: null
    });
  },

  componentDidMount: function () {
    window.addEventListener("scroll", this.handleScroll);
    this.sinStoreToken = SinStore.addListener(this._onSinsIndexChange);
    ApiUtil.fetchSins(
      this.props.boardIds,
      0,
      this.toggleLoadingFlag
    );
  },

  componentWillUnmount: function () {
    this.sinStoreToken.remove();
    window.removeEventListener("scroll", this.handleScroll);
  },

  componentWillReceiveProps: function () {
    this.forceUpdate();
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
    $(document.body).css({
      'overflow': 'hidden'
    });
    this.setState({ detailSinId: parseInt(e.currentTarget.id) });
  },

  _closeSinShow: function (e) {
    if (
      e.target.className === "sin-detail-wrapper" ||
      e.target.className === "sin-show-board-link"
    ) {
      $(document.body).css({
        'overflow': 'scroll'
      });
      this.setState({ detailSinId: null });
    }
  },

  _onSinsIndexChange: function () {
    this.setState({ sins: SinStore.all() });
  },

  _handleKeyDown: function (e) {
    if (e.keyCode === 27) {
      $(document.body).css({
        'overflow': 'scroll'
      });
      this.setState({ detailSinId: null });
    }
  },

  render: function () {
    var detailSinId = this.state.detailSinId,
      sinShow,
      indexHiddenClass,
      createSin,
      className = 'sin-index',
      spinner1,
      spinner2;

    if (this.props.createSin) {
      createSin = this.props.createSin;
    }
    if (detailSinId) {
      className += ' show';

      sinShow = <SinShow
        className='sin-show'
        key={detailSinId}
        sinId={detailSinId}
        _onKeyDown={this._handleKeyDown}
        _closeSinShow={this._closeSinShow}
      />;
      indexHiddenClass = ' hidden';
    }
    if (this.state.loadingFlag) {
      var spinner = (
        <img
          className='spinner'
          src='http://www.svanemerket.no/Templates/Main/Styles/Images/spinner.gif'
        />
      );
      if (this.state.sins.length === 0) {
        spinner1 = spinner;
      } else {
        spinner2 = spinner;
      }
    }
    return (
      <div className='sin-index'>
      {createSin}
        <div>
        {spinner1}
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
        {spinner2}
        </div>
        {sinShow}
      </div>
    );
  }
});

module.exports = SinsIndex;
