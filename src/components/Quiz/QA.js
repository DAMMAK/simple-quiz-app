import React, { Component } from "react";
import axios from "axios";
import "./QA.scss";
import qs from "./question.json";

class QA extends Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      questionData: [],
      current: 0
    };
  }

  componentDidMount() {
    // const question = await axios.get('http://localhost:5000/loadquestions')
    // console.log(question.data);
    // this.setState({questionData:question.data.questions});

    this.setState({ questionData: qs.questions });
  }

  next() {
    if (this.state.current !== this.state.questionData.length - 1) {
      this.setState({ ...this.state, current: this.state.current + 1 });
    }
  }

  previous() {
    if (this.state.current > 0) {
      this.setState({ ...this.state, current: this.state.current - 1 });
    }
  }
  render() {
    if (this.state.questionData.length > 0)
      var question = this.state.questionData[this.state.current].ques;
    return (
      <div className="quiz">
        <div className="question">{question}</div>

        <div className="question_option">
          <input type="radio" name="option" id="A" />
          <span id="A">
            {this.state.questionData.length > 0
              ? this.state.questionData[this.state.current].options["A"]
              : ""}
          </span>
          <input type="radio" name="option" id="B" />
          <span id="B">
            {this.state.questionData.length > 0
              ? this.state.questionData[this.state.current].options["B"]
              : ""}
          </span>
        </div>

        <div className="navigation">
          <button className="navigation__previous" onClick={this.previous}>
            Previous Question
          </button>
          <button className="navigation__next" onClick={this.next}>
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

export default QA;
