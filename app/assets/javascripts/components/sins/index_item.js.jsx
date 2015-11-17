(function (root) {

  root.SinsIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    handleTitleClick: function (e) {
      e.preventDefault();
      this.props.sin;
    },

    render: function () {
      var sin = this.props.sin;
      return (
        <li>
          <h3 onClick={this.handleTitleClick} key={sin.id}>{sin.title}</h3>
          <p>{sin.description}</p>
        </li>
      );
    }
  });
}(this));
