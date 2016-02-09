var React = require('react/addons');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var FollowButton = require('./../buttons/follow_button');


var BoardIndexItem = React.createClass({
  mixins: [ReactRouter.History],

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

module.exports = BoardIndexItem;
