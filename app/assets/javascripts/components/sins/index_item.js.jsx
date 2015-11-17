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
        <li>
          <h3 key={sin.id}>
            <Link to={'/sins/' + sin.id}>{sin.title}</Link>
          </h3>
          <p>{sin.description}</p>
        </li>
      );
    }
  });
}(this));
