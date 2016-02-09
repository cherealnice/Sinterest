var React = require('react/addons');
var ReactRouter = require('react-router');
var SinterestHeader = require('./sinterest_header');
var BoardsIndex = require('./../boards/index');

var BoardsIndexPage = React.createClass({

  render: function () {
    return (
      <div>
        <SinterestHeader
          title='Boards'
          description='Find something new.' />
        <BoardsIndex id='boards-index' />
      </div>
    );
  }
});

module.exports = BoardsIndexPage;
