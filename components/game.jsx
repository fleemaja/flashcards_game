var React = require('react');
var GameLogic = require('../game_logic');
var AnswerChoice = require('./answer_choice');

var Game = React.createClass({
  getInitialState: function () {
    var game = new GameLogic();
    return({ card: game.currentCard, answerChoices: game.answerChoices});
  },

  newCard: function() {
    var game = new GameLogic();
    alert("ran before!");
    game.generateCard();
    alert("ran after!");
    this.setState({card: game.currentCard, answerChoices: game.answerChoices});
  },

  render: function () {
    var correct = this.state.card['term'];
    var that = this;
    return (
      <div>
        <h2>{ this.state.card['definition'] } </h2>
        <ul>
          { this.state.answerChoices.map(function(choice) {
            return (<AnswerChoice choice={choice} correctAnswer={correct}
              newCard={that.newCard} /> )
          }) }
        </ul>
      </div>
    )
  }
});

module.exports = Game;
