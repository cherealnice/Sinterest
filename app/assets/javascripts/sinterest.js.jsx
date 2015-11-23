$(function () {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var SinsIndexWrapper = React.createClass({
    render: function () {
        var id;
        if (this.props.params) {
          id = this.props.params.sinId;
        }
      return (
          <SinsIndex store={SinStore} sinId={id} />
      );
    }
  });

  var App = React.createClass({
    render: function(){
      return (
          <div>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={SinsIndexWrapper} />
        <Route path="boards" component={BoardsIndex} />
        <Route path="sins/:sinId" component={SinsIndexWrapper} />
        <Route path="boards/:boardId" component={BoardShow} />
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);

}.bind(this));
