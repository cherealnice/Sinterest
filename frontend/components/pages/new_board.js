var React = require('react/addons');
var ReactRouter = require('react-router');
var SinterestHeader = require('./sinterest_header');
var BoardForm = require('./../boards/form');

var NewBoard = React.createClass({

  render: function () {
    return (
      <div>
        <SinterestHeader
          title='New Board'
          description='Start something amazing.' />
        <div className='new-form-container new-board-container' >
          <BoardForm />
        </div>
      </div>
    );
  }
});

module.exports = NewBoard;
