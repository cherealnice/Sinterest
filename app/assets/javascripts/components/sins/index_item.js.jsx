(function (root) {

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
          <h3 onClick={this.showSinDetail} key={sin.id}>{sin.title}</h3>
          <p>{sin.description}</p>
        </li>
      );
    }
  });
}(this));
