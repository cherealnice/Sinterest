(function (root) {

  root.BoardShow = React.createClass({

    getInitialState: function () {
      debugger;
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
      BoardStore.on(BoardStore.BOARD_DETAIL_CHANGE_EVENT, this._onChange);
      var boardId = parseInt(this.props.params.boardId);
      ApiUtil.fetchSingleBoard(boardId);
    },

    componentWillUnmount: function () {
      BoardStore.removeListener(BoardStore.BOARD_DETAIL_CHANGE_EVENT, this._onChange);
    },

    render: function () {
      var board = this.state.board;
      var header;
      var comments;
      if (board) {
        header = (
        <div>
          <header className='board-show-header'>
            <h1>{board.title}</h1>
            <p>{board.author.username}</p>
            <p className='board-show-desc'>{board.description}</p>
          </header>
        </div>
        );
      }

      return (
        <div className="board-wrapper">
          {header}
          <section className="board-sins-index">
            <SinsIndex boards={[board]} />
          </section>
        </div>
      );
    }
  });
}(this));
