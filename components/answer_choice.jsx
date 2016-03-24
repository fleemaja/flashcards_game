var React = require('react');

var AnswerChoice = React.createClass({

  handleClick: function (e) {
    var choice = e.currentTarget.id;
    if (choice == this.props.correctAnswer) {
      this.props.correct();
    }
    document.querySelector("#myCard").classList.toggle("flip");
    var that = this;
    setTimeout(function() {
      document.querySelector("#myCard").classList.toggle("flip");
      that.props.newCard();
    }, 2000);
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
