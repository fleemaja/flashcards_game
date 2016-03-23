var Spanish = require('./data/42.json');


var GameLogic = function () {
  this.cards = Spanish['gameData'];
  this.currentCard = null;
  this.answerChoices = [];
  this.correctAnswer = null;
  this.generateCard();
};

GameLogic.prototype.generateCard = function () {
  var cards = this.cards;
  var newCard = cards[Math.floor(Math.random()*(cards.length))]
  this.currentCard = newCard;
  this.generateAnswerChoices();
};

GameLogic.prototype.generateAnswerChoices = function () {
  var correctAnswer = this.currentCard['term'];
  this.correctAnswer = correctAnswer;
  this.answerChoices = [];
  this.answerChoices.push(correctAnswer);
  var i = 0
  while (i < 3) {
    var term = this.cards[Math.floor(Math.random()*(this.cards.length))]['term']
    if (this.answerChoices.indexOf(term) === -1) {
      this.answerChoices.push(term);
      i += 1;
    }
  }
};

module.exports = GameLogic;
