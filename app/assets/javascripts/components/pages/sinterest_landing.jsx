(function (root) {

  root.SinterestLanding = React.createClass({
    render: function () {
        var detailSinId;
        if (this.props.params) {
          detailSinId = parseInt(this.props.params.sinId);
        }
      return (
        <div>
          <SinterestHeader
            title='Sinterest'
            description='Go ahead, indulge.'/>
          <SinsIndex id='main-index' store={SinStore} detailSinId={detailSinId} />
        </div>
      );
    }
  });

}(this));
