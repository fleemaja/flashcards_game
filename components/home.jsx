var React = require('react');
var GameLogic = require('../game_logic');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return(
      <div>
        <ul>
          <li><Link to="game">Spanish</Link></li>
          <li><Link to="game">Psych</Link></li>
          <li><Link to="game">US History</Link></li>
          <li><Link to="game">French Revolution</Link></li>
          <li><Link to="game">Colonialism</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Home;
