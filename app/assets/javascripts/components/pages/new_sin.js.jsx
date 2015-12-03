var React = require('react/addons')
var ReactRouter = require('react-router');

var SinterestHeader = require('./sinterest_header');
var SinForm = require('./../sins/form');

var NewSin = React.createClass({

  render: function () {
    return (
      <div>
        <SinterestHeader
          title='New Sin'
          description='Make it count.' />
        <div className='new-form-container sin-form-container'>
          <SinForm />
        </div>
      </div>
    );
  }
});

module.exports = NewSin;
