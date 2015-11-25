(function (root) {

  var Link = ReactRouter.Link;

  root.BoardIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      var board = this.props.board;
      var sinsData;
      var author;
      if (board.images) {
        sinsData = (
          board.images.map(function (i) {
            return (
              <li>
                <img src={i} />
              </li>
            );
          })
        );
      }
      if (this.props.show_author) {
        author = (
          <Link
            className='tile-bottom board-author'
            to={'/users/' + board.author_id}>
              {'Owner: ' + board.author_username}
          </Link>
        );
      }

      return (
        <li className="board-li tile">
          <Link className='board-link' to={'/boards/' + board.id}>
            <FollowButton
              followClass='Board'
              target={board}
              followed={board.followed} />
            <p className='tile-title board-title'>{board.title}</p>
            <ul className='board-sins'>
              {sinsData}
            </ul>
            {author}
          </Link>
        </li>
      );
    }
  });
})(this);
