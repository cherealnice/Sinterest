(function (root) {

  root.CommentForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    blankAttrs: {
      body: ''
    },

    getInitialState: function () {
      return this.blankAttrs;
    },

    createComment: function (e) {
      e.preventDefault();
      var comment = {};
      comment.body = this.state.body;
      comment.sin_id = this.props.sin.id;
      ApiUtil.createComment(comment);
      this.setState(this.blankAttrs);
    },

    render: function () {
      return (
        <form className="comment-form" onSubmit={this.createComment}>

          <div>
            <label htmlFor='comment-body'>Comment:</label>
            <textarea id='comment-body' valueLink={this.linkState("body")} />
            <br />
          </div>

          <button>Submit</button>
        </form>
      );
    }
  });
}(this));
