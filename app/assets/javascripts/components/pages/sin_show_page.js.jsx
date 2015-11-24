(function (root) {

  root.SinShowModal = React.createClass({

    render: function () {
      return (
        <SinShow className='sin-show' sinId={this.props.params.sinId} />
      );
    }
  });

}(this));
