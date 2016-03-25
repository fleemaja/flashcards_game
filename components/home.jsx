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
        <h1 className="choose">Choose a Subject to Begin</h1>
        <div className="container">
          <div className="pack">
            <Link to="game/spanish"><img src="./images/spanish.jpg" className="pack-logo"/>
                 <br/>Spanish</Link>
          </div>
          <div className="pack">
            <Link to="game/psych"><img src="./images/psych.jpg" className="pack-logo"/>
                 <br/>Psychology</Link>
          </div>
          <div className="pack">
            <Link to="game/ushistory"><img src="./images/ushistory.jpg" className="pack-logo"/>
                 <br/>US History</Link>
          </div>
          <div className="pack">
            <Link to="game/colonialism"><img src="./images/colonialism.jpg" className="pack-logo"/>
                 <br/>Colonialism</Link>
          </div>
          <div className="pack">
            <Link to="game/frenchrev"><img src="./images/frenchrev.jpg" className="pack-logo"/>
                 <br/>The French Revolution</Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
