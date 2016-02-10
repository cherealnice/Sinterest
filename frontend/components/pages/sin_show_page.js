var React = require('react');
var ReactRouter = require('react-router');
var SinShow = require('./../sins/show');

var SinShowModal = React.createClass({

  render: function () {
    return (
      <SinShow className='sin-show' sinId={this.props.params.sinId} />
    );
  }
});

module.exports = SinShowModal;
