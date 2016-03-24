var React = require('react');
var GameLogic = require('../game_logic');
var AnswerChoice = require('./answer_choice');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Game = React.createClass({
  getInitialState: function () {
    var category = this.props.params.category;
    var game = new GameLogic(category);
    return({ timeLeft: 60, card: game.currentCard,
      count: 0, answerChoices: game.answerChoices, game: game,
      latestChoice: "", answersClickable: true});
  },

  componentDidMount: function () {
    var category = this.props.params.category;
    var game = new GameLogic(category);
    document.getElementById("continue-button").disabled = true;
    this.setState({ timeLeft: 60, count: 0, game: game })
    this.newCard();
    this.intervalId = setInterval(this.tick, 1000);
  },

  tick: function () {
    if (this.state.timeLeft > 0) {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });
    } else {
      clearInterval(this.intervalId);
    }
  },

  newCard: function() {
    var game = this.state.game;
    game.generateCard();
    this.setState({card: game.currentCard, answerChoices: game.answerChoices});
  },

  correct: function() {
    this.setState({ count: this.state.count + 1 });
  },

  handleInput: function(choice) {
    document.getElementById("continue-button").disabled = false;
    var answers = document.querySelectorAll('.answer'), i;
    for (i = 0; i < answers.length; ++i) {
      answers[i].classList.toggle('no-click');;
    }
    this.setState({ answersClickable: false });
    var correct = this.state.card['term'];
    if (choice === this.state.card['term']) {
      document.getElementById(choice).classList.toggle('correct-choice');
    } else {
      document.getElementById(choice).classList.toggle('incorrect-choice');
      document.getElementById(correct).classList.toggle('correct-choice');
    }
    this.setState({ latestChoice: choice })
  },

  continue: function() {
    var latest = this.state.latestChoice;
    var correct = this.state.card['term'];
    var that = this;
    document.getElementById("continue-button").disabled = true;
    var answers = document.querySelectorAll('.answer'), i;
    for (i = 0; i < answers.length; ++i) {
      answers[i].classList.toggle('no-click');;
    }
    if (latest !== correct) {
      document.getElementById(latest).classList.toggle('incorrect-choice');
    }
    document.getElementById(correct).classList.toggle('correct-choice');
    document.querySelector("#myCard").classList.toggle("flip");
    setTimeout(function() { that.newCard(); }, 200);
    this.setState({ answersClickable: true });
  },

  playAgain: function() {
    this.replaceState(this.getInitialState());
    this.intervalId = setInterval(this.tick, 1000);
  },

  interface: function() {
    var correct = this.state.card['term'];
    var that = this;
    if (this.state.timeLeft !== 0) {
      return (
        <div className="container">
          <div className="flip-container" id="myCard">
            <div className="flipper">
              <div className="front">
                <div className="front-text">
                  { this.state.card['definition'] }
                </div>
              </div>
              <div className="back">
                <div className="back-text">
                  { this.state.card['definition'] }
                </div>
                <span className="answer-text">
                  Answer: { correct }
                </span>
              </div>
            </div>
          </div>
          <div className="answer-choices">
            { this.state.answerChoices.map(function(choice) {
              return (<AnswerChoice choice={choice} correctAnswer={correct}
                newCard={that.newCard} correct={that.correct}
                handleInput={that.handleInput}
                clickable={that.state.answersClickable} /> )
            }) }
          </div>
          <button id="continue-button" onClick={this.continue}>
            Continue
          </button>
        </div>
      )
    } else {
      return (<div><h4>{ "Time is up!" }</h4>
      <button onClick={this.playAgain}>Play Again?</button></div>)
    }
  },

  render: function () {
    var pack = this.state.game.pack;
    var category = pack['category'];
    var datasetName = pack['datasetName'];
    var link = "/game/" + this.props.params.category;
    var imgSrc = "./images/" + this.props.params.category + ".jpg"
    return (
      <div>
        <h1><img src={imgSrc} className="pack-logo-very-small"/>
          { category }: { datasetName }
        </h1>
        <h1>Time Left: { this.state.timeLeft }
        </h1>
        { this.interface() }
        <h1>Correct: { this.state.count }</h1>
        <button><Link to={link}>&lt; Back</Link></button>
      </div>
    )
  }
});

module.exports = Game;
