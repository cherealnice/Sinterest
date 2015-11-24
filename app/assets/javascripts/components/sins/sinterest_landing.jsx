(function (root) {

  root.SinterestLanding = React.createClass({
    render: function () {
        var id;
        if (this.props.params) {
          id = this.props.params.sinId;
        }
      return (
        <div>
          <SinterestHeader
            title='Sinterest'
            description='Go ahead, indulge.' />
          <SinsIndex store={SinStore} />
        </div>
      );
    }
  });

}(this));
