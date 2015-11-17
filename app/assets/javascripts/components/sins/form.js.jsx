(function (root) {

  root.SinForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    blankAttrs: {
      title: '',
      description: '',
      link: '',
      boardId: ''
    },

    getInitialState: function () {
      return this.blankAttrs;
    },

    createSin: function (e) {
      e.preventDefault();
      var sin = {};
      sin.title = this.state.title;
      sin.description = this.state.description;
      sin.link = this.state.link;
      sin.board_id = this.state.boardId;
      ApiUtil.createSin(sin);
      this.setState(this.blankAttrs);
    },

    render: function () {
      return (
        <form className="sin-form" onSubmit={this.createSin}>
          <div>
            <label htmlFor='sin-title'>Title:</label>
            <input type="text" id='sin-title'
              valueLink={this.linkState("title")} />
            <br />
          </div>

          <div>
            <label htmlFor='sin-description'>Description:</label>
            <textarea id='sin-description' value={this.state.descripton}
              valueLink={this.linkState("description")} />
            <br />
          </div>

          <div>
            <label htmlFor='sin-link'>Website:</label>
            <input type='text' id='sin-link' valueLink={this.linkState("link")} />
            <br />
          </div>

          <div>
            <label htmlFor='sin-boardId'>Board ID:</label>
            <input type='number' id='sin-boardId'
              valueLink={this.linkState("boardId")}>
                {this.state.boardId}
            </input>
            <br />
          </div>

          <button>Submit</button>
        </form>
      );
    }
  });
}(this));