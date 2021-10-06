import React from "react";
import "bulma/css/bulma.min.css";
import { Card } from "react-bulma-components";

export default class GameParams extends React.Component {
  constructor(props) {
    super(props);
    this.testing = "Hell Yeah";

    this.questions = [
      {
        questionText: "How many characters does your opponent have?",
      },
      {
        questionText: "How many vehicles and monsters do they have?"
      }
    ]

    this.state = {
      psykers: "The Warp",
      currentQuestion: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ psykers: event.target.value });
  }

  handleSubmit(event) {
    alert('The warp has sent' + this.state.psykers);
    this.setState({ currentQuestion: (this.state.currentQuestion+1)})
    event.preventDefault();
  }

  render() {
    return (
      <Card>
        <header>{this.questions[this.state.currentQuestion].questionText}</header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Psykers
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Card>
    );
  }
}
