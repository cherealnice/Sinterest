(function (root) {

  root.SinForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    blankAttrs: {
      title: '',
      image: null,
      imageUrl: '',
      description: '',
      link: '',
      boardId: ''
    },

    getInitialState: function () {
      return this.blankAttrs;
    },

    resetState: function () {
      this.setState(this.blankAttrs);
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

      ApiUtil.createSin(formData, this.resetState());
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
      return (
        <form className="new-form sin-form" onSubmit={this.createSin}>
          <div>
            <label htmlFor='sin-title'>Title:</label>
            <input type="text" id='sin-title'
              valueLink={this.linkState("title")} />
            <br />
          </div>

          <div>
            <input type="file" id="sin-image"
              onChange={this._changeFile} />
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
