(function(root) {
  root.UserForm = React.createClass({
    mixins: [ReactRouter.History],

    submit: function (e) {
      e.preventDefault();
      
      debugger;
    },

    render: function() {
      
      return (
        <form onSubmit={ this.submit }>
          
          <h1>Sign Up!</h1>
          
          <label>
            Email
            <input type="text" name="email" />
          </label>
  
          <label>
            Password
            <input type="password" name="password" />
          </label>
  
          <button>Join!</button>
        </form>
      );
    },

  })
})(this);