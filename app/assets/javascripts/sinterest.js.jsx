$(function () {

  var SinterestLanding = require('components/pages/sinterest_landing');
  var BoardsIndexPage = require('components/pages/boards_index_page');
  var BoardShow = require('components/boards/show');
  var NewBoard = require('components/pages/new_board');
  var NewSin = require('components/pages/new_sin');
  var SessionForm = require('components/sessions/new_session');
  var UserForm = require('components/users/user_form');
  var UserShow = require('components/users/user_show');
  var React = require('react/addons');
  var ReactRouter = require('react-router');
  var App = require('components/app');
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;

  var routes = (
      <Route path="/" component={ App }>
        <IndexRoute component={ SinterestLanding } />
        <Route path="boards" component={ BoardsIndexPage } />
        <Route path="sins/:sinId" component={ SinterestLanding } />
        <Route path="boards/:boardId" component={ BoardShow } />
        <Route path="board/new" component={ NewBoard } />
        <Route path="sin/new" component={ NewSin } />
        <Route path="login" component={ SessionForm } />
        <Route path="user/new" component={ UserForm } />
        <Route path="users/:id" component={ UserShow } />
      </Route>
  );

  React.render(<Router onUpdate={window.scrollTo(0, 0)}>{routes}</Router>, root);

});
