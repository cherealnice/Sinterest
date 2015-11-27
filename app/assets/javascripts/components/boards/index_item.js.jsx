(function (root) {

  var Link = ReactRouter.Link;

  root.BoardIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    // onLoad: function () {
    //   var $container = $('.boards');
    //   $container.imagesLoaded( function () {
    //     $container.masonry({itemSelector : '.board', columnWidth: 200 });
    //   });
    // },

    render: function () {
      var board = this.props.board;
      var sinsData;
      var author;
      if (board.images) {
        sinsData = (
          board.images.map(function (i) {
            return (
              <li className='sin-image'>
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
        <Link className='board-link' to={'/boards/' + board.id}>
          <li className="board-li tile group">
            <FollowButton
              followClass='Board'
              target={board}
              followed={board.followed} />
            <p className='tile-title board-title'>{board.title}</p>
            <ul className='board-sins'>
              {sinsData}
            </ul>
          </li>
        </Link>
      );
    }
  });
})(this);
