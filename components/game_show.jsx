var React = require('react');
var GameLogic = require('../game_logic');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var GameShow = React.createClass({
  getInitialState: function () {
    var category = this.props.params.category;
    return ({ category: category })
  },

  render: function() {
    var link = "game/" + this.state.category + "/play";
    return (
      <div>
        <h1>{ this.state.category }</h1>
        <h3>{ "How many correct answers can you get in 60 seconds? \
          Click Play to find out!" }</h3>
        <Link to={link}>Play</Link>
      </div>
    )
  }
})

module.exports = GameShow;
