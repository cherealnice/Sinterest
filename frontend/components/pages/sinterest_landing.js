var React = require('react');
var ReactRouter = require('react-router');
var SinsIndex = require('../sins/index');
var SinStore = require('../../stores/sin_store');
var SinterestHeader = require('./sinterest_header');

var SinterestLanding = React.createClass({

  render: function () {
    return (
      <div>
        <SinterestHeader
          title='Sinterest'
          description='Do your best.'/>
        <SinsIndex
          id='main-index'
          store={SinStore} />
      </div>
    );
  }
});

module.exports = SinterestLanding;
