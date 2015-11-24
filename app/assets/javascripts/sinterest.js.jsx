$(function () {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={SinterestLanding} />
        <Route path="boards" component={BoardsIndex} />
        <Route path="sins/:sinId" component={SinterestLanding} />
        <Route path="boards/:boardId" component={BoardShow} />
        <Route path="board/new" component={NewBoard} />
        <Route path="sin/new" component={NewSin} />
        <Route path="login" component={ SessionForm }/>
        <Route path="users/:id" component={ UserShow } />
      </Route>
  );

  React.render(<Router>{routes}</Router>, root);

}.bind(this));
