var React = require('react/addons')
var ReactRouter = require('react-router');

var BoardIndexItem = require('./index_item');

var BoardsIndex = React.createClass({

  getInitialState: function () {
    return ({ boards: [] });
  },

  componentDidMount: function () {
    BoardStore.on(BoardStore.BOARDS_CHANGE_EVENT, this._onBoardsIndexChange);
    ApiUtil.fetchBoards(this.props.user);
  },

  componentWillUnmount: function () {
    BoardStore.removeListener(BoardStore.BOARDS_CHANGE_EVENT,
                            this._onBoardsIndexChange);
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
