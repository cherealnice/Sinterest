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
      var title;
      var description;
      var boardIds = [this.props.params.boardId];
      var followButton;
      var comments;
      if (board) {
        var liked = board.liked ? true : false;
        var followed = board.followed ? true : false;
        title = board.title;
        description = board.description;

        followButton = (
              <FollowButton
                followClass='Board'
                target={board}
                followed={followed}/>
        );

      }
      return (
        <div className="board-wrapper">
          <SinterestHeader
            title={title}
            description={description}
            button={followButton} />
          <section className="board-sins-index">
            <SinsIndex id='main-index' store={SinStore} boardIds={boardIds} />
          </section>
        </div>
      );
    }
  });
}(this));
