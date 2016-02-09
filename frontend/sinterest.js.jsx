var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var App = require('./components/app');
var SinterestLanding = require('./components/pages/sinterest_landing');
var BoardsIndexPage = require('./components/pages/boards_index_page');
var BoardShow = require('./components/boards/show');
var NewBoard = require('./components/pages/new_board');
var NewSin = require('./components/pages/new_sin');
var SinShow = require('./components/sins/show');
var SessionForm = require('./components/sessions/form');
var UserForm = require('./components/users/form');
var UserEdit = require('./components/users/user_edit');
var UserShow = require('./components/users/show');

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var SinShowPage = React.createClass({
  render: function () {
    var id = parseInt(this.props.params.id);
    return <SinShow sinId={id} />;
  }
});

var routes = (
  <Route path="/" component={ App } onEnter={scrollToTop}>
    <IndexRoute component={ SinterestLanding } />
    <Route path="boards" component={ BoardsIndexPage } />
    <Route path="boards/:boardId" component={ BoardShow } />
    <Route path="board/new" component={ NewBoard } />
    <Route path="sin/new" component={ NewSin } />
    <Route path="sins/:id" component={ SinShowPage } />
    <Route path="login" component={ SessionForm } />
    <Route path="user/new" component={ UserForm } />
    <Route path="user/edit" component={ UserEdit } />
    <Route path="users/:id" component={ UserShow } />
  </Route>
);

var scrollToTop = function (a, b, callback) {
  $('body').scrollTop(0);
  callback();
};

$(function () {
    if (!!root) {
      ReactDOM.render(<Router>{routes}</Router>, root);
    }
});
