var React = require('react');
var GameLogic = require('../game_logic');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var App = React.createClass({
  render: function () {
    return(
      <div>
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
