var React = require('react');
var ReactRouter = require('react-router');
var FollowButton = require('./../buttons/follow_button');
var SinterestHeader = require('./../pages/sinterest_header');
var SinsIndex = require('./../sins/index');
var BoardStore = require('../../stores/board_store');
var CurrentUserStore = require('../../stores/current_user_store');
var ApiUtil = require('../../util/api_util');
var Link = ReactRouter.Link;

var BoardShow = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { board: BoardStore.find(parseInt(this.props.params.boardId)) };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentWillReceiveProps: function (newProps) {
    var boardId = parseInt(newProps.params.boardId);
    ApiUtil.fetchSingleBoard(boardId);
  },

  componentDidMount: function () {
    this.boardStoreToken = BoardStore.addListener(this._onChange);
    var boardId = parseInt(this.props.params.boardId);
    ApiUtil.fetchSingleBoard(boardId);
  },

  componentWillUnmount: function () {
    this.boardStoreToken.remove();
  },

  render: function () {
    var board = this.state.board;
    var title;
    var description;
    var author;
    var boardIds = [this.props.params.boardId];
    var followButton;
    var comments;
    var createSin;


    if (board) {
      var liked = board.liked ? true : false;
      var followed = board.followed ? true : false;
      author = board.author;
      title = board.title;
      description = board.description;

      followButton = (
            <FollowButton
              followClass='Board'
              target={board}
              followed={followed}/>
      );

      if (board.author_id === CurrentUserStore.currentUser().id) {
        createSin = (
          <button className='follow-button create-sin'>
            <Link key='link' to={'/sin/new'}>
              Add a sin!
            </Link>
          </button>
        );
      }
    }
    return (
      <div className="board-wrapper">
        <SinterestHeader
          title={title}
          description={description}
          button={followButton}
          user={author}
          createSin={createSin} />
        <section className="board-sins-index">
          <SinsIndex id='main-index'
            store={SinStore}
            boardIds={boardIds}
            createSin={createSin} />
        </section>
      </div>
    );
  }
});

module.exports = BoardShow;
