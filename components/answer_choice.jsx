var React = require('react');

var AnswerChoice = React.createClass({

  handleClick: function (e) {
    var choice = e.currentTarget.id;
    if (choice == this.props.correctAnswer) {
      this.props.correct(e.currentTarget.id);
    }
    document.querySelector("#myCard").classList.toggle("flip");
    this.props.handleInput(e.currentTarget.id);
  },

  render: function () {

    return (
      <div className="answer" onClick={this.handleClick} id={this.props.choice}>
        <div className="choice-text">
          { this.props.choice }
        </div>
      </div>
    )
  }
});

module.exports = AnswerChoice;
