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
var UserEdit = require('./components/users/edit');
var UserShow = require('./components/users/show');

var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var SinShowPage = React.createClass({
  render: function () {
    var id = parseInt(this.props.params.id);
    return <SinShow sinId={id} />;
  }
});

var scrollToTop = function (params, state, callback) {
  window.scrollTo(0, 0);
  callback();
};

var routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ SinterestLanding } onEnter={scrollToTop}/>
    <Route path="boards" component={ BoardsIndexPage } onEnter={scrollToTop}/>
    <Route path="boards/:boardId" component={ BoardShow } onEnter={scrollToTop}/>
    <Route path="board/new" component={ NewBoard } onEnter={scrollToTop}/>
    <Route path="sin/new" component={ NewSin } onEnter={scrollToTop}/>
    <Route path="sins/:id" component={ SinShowPage } onEnter={scrollToTop}/>
    <Route path="login" component={ SessionForm } onEnter={scrollToTop}/>
    <Route path="user/new" component={ UserForm } onEnter={scrollToTop}/>
    <Route path="user/edit" component={ UserEdit } onEnter={scrollToTop}/>
    <Route path="users/:id" component={ UserShow } onEnter={scrollToTop}/>
  </Route>
);

$(function () {
  var root = document.getElementById('content');
  if (!!root) {
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});
