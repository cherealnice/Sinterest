var React = require('react/addons');
var ReactRouter = require('react-router');
var CommentForm = require('./../comments/form');
var CommentsIndex = require('./../comments/index');
var LikeButton = require('./../buttons/like_button');
var Link = ReactRouter.Link;

var SinShow = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var sin = SinStore.find(this.props.sinId);
    return { sin: sin };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function (newProps) {
    var sinId = newProps.sinId;
    ApiUtil.fetchSingleSin(sinId);
  },

  componentDidMount: function () {
    SinStore.on(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
    ApiUtil.fetchSingleSin(this.props.sinId);
    window.addEventListener('keydown', this.props._onKeyDown);
  },

  componentWillUnmount: function () {
    SinStore.removeListener(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
    window.removeEventListener('keydown', this.props._onKeyDown);
  },

  render: function () {
    var sin = this.state.sin;
    var details;
    var comments;
    var sinBoardIndex;
    var boardLink;
    var likeButton;
    if (sin) {
      var liked = sin.liked ? true : false;

      likeButton = <LikeButton
        likeClass='Sin'
        target={sin}
        liked={liked} />;

      var board = sin.boards[0];
      boardLink = (
        <Link className='sin-board' to={'/boards/' + board.id}>
          <p>{'Found on: ' + board.title}</p>
        </Link>
      );

      details = (
      <div>
        <section className='sin-show-section'>
          <div className='sin-show-image-container'>
            {likeButton}
            <img className='sin-show-image' src={sin.image_url} />
          </div>
          {boardLink}
          <a href={sin.link}>Go to link</a>
          <h1>{sin.title}</h1>
          <p className='sin-show-desc'>{sin.description}</p>
        </section>
      </div>
      );

      if (sin.comments) {
        comments = (<CommentsIndex comments={sin.comments} />);
      }

    }
    return (
      <div className="sin-detail-wrapper" onClick={this.props._closeSinShow}>
        <section className='sin-wrapper'>
          {details}
          <section className="sin-comments">
            {comments}
            <CommentForm sin={sin} />
          </section>
        </section>
      </div>
    );
  }
});

module.exports = SinShow;
