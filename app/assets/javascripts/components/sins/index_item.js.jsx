(function (root) {

  var Link = ReactRouter.Link;

  root.SinIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    componentDidMount: function () {
      var $container = $('#sins-container');
      $container.imagesLoaded( function () {
        $container.masonry({itemSelector : '.sin', columnWidth: 240 });
      });
    },

    showSinDetail: function (e) {
      e.preventDefault();

      var sin = this.props.sin;
      this.history.pushState(null, "/sins/" + sin.id, {});
    },

    render: function () {
      var sin = this.props.sin;
      var liked = sin.liked ? true : false;
      return (
        <li className="sin">
          <h3 key={sin.id}>
            <LikeButton likeClass='Sin' target={sin} liked={liked}/>
            <Link className='sin-title' to={'/sins/' + sin.id}>
              <img className='sin-show-image' src={sin.image_url} />
              <p>{sin.title}</p>
            </Link>
          </h3>
          <p className='sin-desc'>{sin.description}</p>
          <Link className='sin-board' to={'/boards/' + sin.boards[0].id}>
            {sin.boards[0].title}
          </Link>
        </li>
      );
    }
  });
}(this));
