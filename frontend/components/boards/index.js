var React = require('react');
var ReactRouter = require('react-router');
var BoardStore = require('../../stores/board_store');
var ApiUtil = require('../../util/api_util');
var BoardIndexItem = require('./index_item');

var BoardsIndex = React.createClass({

  getInitialState: function () {
    return ({ boards: [] });
  },

  componentDidMount: function () {
    this.boardStoreToken = BoardStore.addListener(this._onBoardsIndexChange);
    ApiUtil.fetchBoards(this.props.user);
  },

  componentWillUnmount: function () {
    this.boardStoreToken.remove();
  },

  _onBoardsIndexChange: function () {
    this.setState({ boards: BoardStore.all() });
  },

  render: function () {
    var show_author = true;
    if (this.props.user) {
      show_author = false;
    }
    return (
      <div>
        <ul className="boards group">
          {this.state.boards.map(function (board) {
              return (
                <BoardIndexItem
                  board={board}
                  key={board.id}
                  show_author={show_author} />
              );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = BoardsIndex;
