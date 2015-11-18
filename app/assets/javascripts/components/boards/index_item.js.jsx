(function (root) {

  var Link = ReactRouter.Link;

  root.BoardIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      var board = this.props.board;
      var sinsData;
      if (board.sins) {
        sinsData = (
          board.sins.map(function (s) {
            return (
              <li key={s.title + s.id}>{s.title}</li>
            );
          })
        );
      }

      return (
        <li className="board-li">
          <Link className='board-tile' to={'/boards/' + board.id}>
          <h3>{board.title}</h3>
          <p className='board-author'>{board.author.username}</p>
          <ul className='board-sins'>
            {sinsData}
          </ul>
          </Link>
        </li>
      );
    }
  });
}(this));
