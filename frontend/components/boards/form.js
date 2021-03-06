var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util');
var SessionsApiUtil = require('../../util/sessions_api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BoardForm = React.createClass({
  mixins: [LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    description: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createBoard: function (e) {
    e.preventDefault();
    var board = {};
    board.title = this.state.title;
    board.description = this.state.description;
    ApiUtil.createBoard(board, this._boardCreated);
    SessionsApiUtil.fetchCurrentUser();
    this.setState(this.blankAttrs);
  },

  _boardCreated: function (boardId) {
    this.history.pushState(null, '/boards/' + boardId);
  },

  render: function () {
    return (
      <form className="new-form board-form" onSubmit={this.createBoard}>
        <div>

          <input type="text" id='board-title'
            placeholder='Title'
            valueLink={this.linkState("title")} />
          <br />
        </div>

        <div>

          <textarea id='board-description'
            placeholder='Description'
            value={this.state.descripton}
            valueLink={this.linkState("description")} />
          <br />
        </div>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = BoardForm;
