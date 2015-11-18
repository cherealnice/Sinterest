(function (root) {

  root.BoardForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

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
      ApiUtil.createBoard(board);
      this.setState(this.blankAttrs);
    },

    render: function () {
      return (
        <form className="board-form" onSubmit={this.createBoard}>
          <div>
            <label htmlFor='board-title'>Title:</label>
            <input type="text" id='board-title'
              valueLink={this.linkState("title")} />
            <br />
          </div>

          <div>
            <label htmlFor='board-description'>Description:</label>
            <textarea id='board-description' value={this.state.descripton}
              valueLink={this.linkState("description")} />
            <br />
          </div>

          <button>Submit</button>
        </form>
      );
    }
  });
}(this));
