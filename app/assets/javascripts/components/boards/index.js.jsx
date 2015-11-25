(function (root) {

  root.BoardsIndex = React.createClass({

    getInitialState: function () {
      return ({ boards: BoardStore.all() });
    },

    componentDidMount: function () {
      BoardStore.on(BoardStore.BOARDS_CHANGE_EVENT, this._onBoardsIndexChange);
      ApiUtil.fetchBoards();
    },

    componentWillUnmount: function () {
      BoardStore.removeListener(BoardStore.BOARDS_CHANGE_EVENT,
                              this._onBoardsIndexChange);
    },

    _onBoardsIndexChange: function () {
      this.setState({ boards: BoardStore.all() });
    },

    render: function () {
      return (
        <div>
          <ul className="boards group">
            {this.state.boards.map(function (board) {
                return (
                  <BoardIndexItem board={board} key={board.id} />
                );
            })}
          </ul>
        </div>
      );
    }
  });
}(this));
