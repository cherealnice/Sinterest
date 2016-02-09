var React = require('react/addons');
var ReactRouter = require('react-router');
var LikeButton = require('./../buttons/like_button');
var Link = ReactRouter.Link;

var SinIndexItem = React.createClass({

  render: function () {
    var sin = this.props.sin;
    var liked = sin.liked ? true : false;
    return (
      <li className="tile sin">
        <h3 key={sin.id}>
          <LikeButton likeClass='Sin' target={sin} liked={liked} />
          <div
            onClick={this.props.showSin}
            id={sin.id}
            className='tile-title sin-title'
            to={'/sins/' + sin.id}
          >
            <img className='sin-show-image' src={sin.image_url} />
            <p>{sin.title}</p>
          </div>
        </h3>
        <p className='tile-desc sin-desc'>{sin.description}</p>
        <Link className='tile-bottom sin-board' to={'/boards/' + sin.boards[0].id}>
          {'Found on: ' + sin.boards[0].title}
        </Link>
      </li>
    );
  }
});

module.exports = SinIndexItem;
