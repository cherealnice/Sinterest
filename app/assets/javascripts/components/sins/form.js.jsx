var SinForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  blankAttrs: {
    title: '',
    image: null,
    imageUrl: '',
    description: '',
    link: '',
    boardId: ''
  },

  getInitialState: function () {
    return ({
      boards: CurrentUserStore.currentUserBoards(),
      attrs: this.blankAttrs
    });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeHandler(this._onCurrentUserChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeHandler(this._onCurrentUserChange);
  },

  _onCurrentUserChange: function () {
    this.setState({ boards: CurrentUserStore.currentUserBoards() });
  },

  resetState: function () {
    this.setState({ attrs: this.blankAttrs });
  },

  createSin: function (e) {
    e.preventDefault();
    var sin = {};

    var title = this.state.title;
    var image = this.state.image;
    var description = this.state.description;
    var link = this.state.link;
    var boardId = this.state.boardId;

    var formData = new FormData();
    formData.append("sin[title]", title);
    formData.append("sin[image]", image);
    formData.append("sin[description]", description);
    formData.append("sin[link]", link);
    formData.append("board_id", boardId);

    ApiUtil.createSin(formData, this._onSuccess);
  },

  _onSuccess: function (boardId) {
    this.history.pushState(null, '/boards/' + boardId);
  },

  _changeFile: function(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var form = this;

    reader.onloadend = function() {
      form.setState({ imageUrl: reader.result, image: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  render: function () {
    var boards = this.state.boards;
    var boardSelect;
    if (boards) {
      boardSelect = boards.map(function (board) {
        return (<option value={board.id}>{board.title}</option>);
      });
    }
    return (
      <form className="new-form sin-form" onSubmit={this.createSin}>
        <div>
          <input type="text" id='sin-title'
            valueLink={this.linkState("title")}
            placeholder='Title' />
          <br />
        </div>

        <div>
          <input type="file" id="sin-image"
            onChange={this._changeFile} />
        </div>

        <div>
          <textarea
            id='sin-description'
            value={this.state.descripton}
            valueLink={this.linkState("description")}
            placeholder='Description' />
          <br />
        </div>

        <div>
          <input type='text'
          id='sin-link'
          valueLink={this.linkState("link")}
          placeholder='URL' />
          <br />
        </div>

        <div>
          <select valueLink={this.linkState("boardId")} name="sin-boardId">
            <option value={null}>Board:</option>
            {boardSelect}
          </select>
          <br />
        </div>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = SinForm;
