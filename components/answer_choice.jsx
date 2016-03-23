var React = require('react');

var AnswerChoice = React.createClass({

  handleClick: function (e) {
    var choice = e.currentTarget.id;
    if (choice == this.props.correctAnswer) {
      this.props.correct();
    }
    this.props.newCard();
  },

  render: function () {

    return (
      <li onClick={this.handleClick} id={this.props.choice}>
        { this.props.choice }
      </li>
    )
  }
});

module.exports = AnswerChoice;
