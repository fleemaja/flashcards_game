var Game = require('./components/game');
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var App = require('./components/app.jsx');
var Home = require('./components/home.jsx');
var GameShow = require('./components/game_show');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="game/:category" component={GameShow}/>
    <Route path="game/:category/play" component={Game}/>
  </Route>

);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('main')
  );
});
