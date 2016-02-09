var React = require('react/addons');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util');

var CommentForm = React.createClass({
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

          <input type="text" className="comment-textarea" placeholder="Add a comment..." valueLink={this.linkState("body")} />
          <br />

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = CommentForm;
