var React = require('react');
var GameLogic = require('../game_logic');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var GameShow = React.createClass({
  getInitialState: function () {
    var category = this.props.params.category;
    var game = new GameLogic(category);
    return ({ category: category, game: game })
  },

  render: function() {
    var link = "game/" + this.state.category + "/play";
    var displayCategory = this.state.game.pack['category'];
    var datasetName = this.state.game.pack['datasetName'];
    var imgSrc = "./images/" + this.state.category + ".jpg"
    return (
      <div>
        <img src={imgSrc} className="pack-logo-small"/>
        <h1>{ displayCategory }</h1>
        <h2>{ datasetName }</h2>
        <h3 className="click-play">{ "How many correct answers can you get in 60 seconds? \
          Click Play to find out!" }</h3>
        <Link to={link}><button>Play</button></Link>

        <h4>{ "Or go back to choose a different set of questions" }</h4>
        <Link to="/"><button>&lt; Back</button></Link>
      </div>
    )
  }
})

module.exports = GameShow;
