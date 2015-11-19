(function (root) {

  var Link = ReactRouter.Link;

  root.SinIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    showSinDetail: function (e) {
      e.preventDefault();

      var sin = this.props.sin;
      this.history.pushState(null, "/sins/" + sin.id, {});
    },

    render: function () {
      var sin = this.props.sin;
      return (
        <li className="sin">
          <h3 key={sin.id}>
            <Link className='sin-title' to={'/sins/' + sin.id}>
                <img className='sin-show-image' src={sin.image_url} />
              {sin.title}
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
