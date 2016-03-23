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
  this.answerChoices = shuffle(this.answerChoices);
};

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

module.exports = GameLogic;
