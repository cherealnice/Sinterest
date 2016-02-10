var React = require('react');
var ReactRouter = require('react-router');
var CommentForm = require('./../comments/form');
var CommentsIndex = require('./../comments/index');
var LikeButton = require('./../buttons/like_button');
var SinStore = require('../../stores/sin_store');
var ApiUtil = require('../../util/api_util');
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
    this.sinStoreToken = SinStore.addListener(this._onChange);
    ApiUtil.fetchSingleSin(this.props.sinId);
    window.addEventListener('keydown', this.props._onKeyDown);
  },

  componentWillUnmount: function () {
    this.sinStoreToken.remove();
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
        type='Sin'
        id={sin.id}
      />;

      var board = sin.boards[0];
      boardLink = (
        <Link className='sin-board' to={'/boards/' + board.id}>
          <p className='sin-show-board-link'>{'Found on: ' + board.title}</p>
        </Link>
      );

      details = (
      <div>
        <section className='sin-show-section'>
          <div className='sin-show-image-container'>
            {likeButton}
            <img className='sin-show-image' src={sin.image_url} />
          </div>
          <h1>{sin.title}</h1>
          <p className='sin-show-desc'>{sin.description}</p>
          {boardLink}
          <a href={sin.link}>Go to link</a>
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
