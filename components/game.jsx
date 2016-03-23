var React = require('react');
var GameLogic = require('../game_logic');
var AnswerChoice = require('./answer_choice');

var Game = React.createClass({
  getInitialState: function () {
    var game = new GameLogic();
    return({ timeLeft: 60, card: game.currentCard,
      count: 0, answerChoices: game.answerChoices});
  },

  startNewGame: function () {
    clearInterval(this.intervalId);
    this.newCard();
    this.setState({ timeLeft: 60, count: 0 })
    this.intervalId = setInterval(this.tick, 1000);
  },

  tick: function () {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });
    } else {
      alert("Time's Up!");
      clearInterval(this.intervalId);
    }
  },

  newCard: function() {
    var game = new GameLogic();
    game.generateCard();
    this.setState({card: game.currentCard, answerChoices: game.answerChoices});
  },

  correct: function() {
    this.setState({ count: this.state.count + 1 });
  },

  render: function () {
    var correct = this.state.card['term'];
    var that = this;
    return (
      <div>
        <button onClick={this.startNewGame}>Play</button>
        <h1>Time Left: { this.state.timeLeft } </h1>
        <h2>{ this.state.card['definition'] } </h2>
        <ul>
          { this.state.answerChoices.map(function(choice) {
            return (<AnswerChoice choice={choice} correctAnswer={correct}
              newCard={that.newCard} correct={that.correct} /> )
          }) }
        </ul>
        <h2>Correct: { this.state.count }</h2>
      </div>
    )
  }
});

module.exports = Game;
