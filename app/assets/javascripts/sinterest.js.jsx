$(function () {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

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
        <IndexRoute component={SinterestLanding} />
        <Route path="boards" component={BoardsIndex} />
        <Route path="sins/:sinId" component={SinShow} />
        <Route path="boards/:boardId" component={BoardShow} />
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);

}.bind(this));
