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
            <Link className='sin-title' to={'/sins/' + sin.id}>{sin.title}</Link>
          </h3>
          <p className='sin-desc'>{sin.description}</p>
          <p className='sin-board'>{sin.board_id}</p>
        </li>
      );
    }
  });
}(this));
