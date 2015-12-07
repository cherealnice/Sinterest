$(function () {

  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var SinShow = require('./components/sins/show');
  var SinShowPage = React.createClass({
    render: function () {
      var id = parseInt(this.props.params.id);
      return <SinShow sinId={id} />;
    }
  });

  var routes = (
      <Route path="/" component={ App }>
        <IndexRoute component={ SinterestLanding } />
        <Route path="boards" component={ BoardsIndexPage } />
        <Route path="boards/:boardId" component={ BoardShow } />
        <Route path="board/new" component={ NewBoard } />
        <Route path="sin/new" component={ NewSin } />
        <Route path="sins/:id" component={ SinShowPage } />
        <Route path="login" component={ SessionForm } />
        <Route path="user/new" component={ UserForm } />
        <Route path="users/:id" component={ UserShow } />
      </Route>
  );

  React.render(<Router onUpdate={window.scrollTo(0, 0)}>{routes}</Router>, root);

});
