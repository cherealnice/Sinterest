var React = require('react/addons');
var ReactRouter = require('react-router');

var SinsIndex = require('../sins/index');
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
