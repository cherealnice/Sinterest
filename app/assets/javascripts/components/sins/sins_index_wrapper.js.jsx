(function (root) {

  root.SinsIndexWrapper = React.createClass({
    render: function () {
        var id;
        if (this.props.params) {
          id = this.props.params.sinId;
        }
      return (
          <SinsIndex store={SinStore} sinId={id} boardIds={this.props.boardIds} />
      );
    }
  });

}(this));
