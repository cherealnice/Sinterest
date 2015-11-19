(function (root) {

  root.BoardShow = React.createClass({

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
      BoardStore.on(BoardStore.BOARD_DETAIL_CHANGE_EVENT, this._onChange);
      var boardId = parseInt(this.props.params.boardId);
      ApiUtil.fetchSingleBoard(boardId);
    },

    componentWillUnmount: function () {
      BoardStore.removeListener(BoardStore.BOARD_DETAIL_CHANGE_EVENT, this._onChange);
    },

    render: function () {
      var board = this.state.board;
      var boardIds = [this.props.params.boardId];
      var header;
      var comments;
      if (board) {
        var liked = board.liked ? true : false;
        header = (
        <div>
          <header className='content-header'>
            <section className='content-header-top'>
              <h1 className='content-header-title'>{board.title}</h1>
              <p className='content-header-desc'>{board.description}</p>
            </section>
            <section className='content-header-bottom'>
              <p className='content-header-user'>
                <img src={board.author_image_url} />
                {board.author.username}
              </p>
              <LikeButton likeClass='Board' target={board} liked={liked}/>
            </section>
          </header>
        </div>
        );
      }
      return (
        <div className="board-wrapper">
          {header}
          <section className="board-sins-index">
            <SinsIndex boards={boardIds} />
          </section>
        </div>
      );
    }
  });
}(this));
