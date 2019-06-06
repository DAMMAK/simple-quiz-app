import React, { Component } from "react";
import axios from "axios";
import "./QA.scss";
import qs from "./question.json";

class QA extends Component {
  constructor() {
    super();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.pick = this.pick.bind(this);

    this.state = {
      questionData: [],
      current: 0,
      ansQues: {},
      correctAns: 0
    };
  }

  async componentDidMount() {
    const question = await axios.get('http://localhost:5000/loadquestions')
    console.log(question.data);
    this.setState({questionData:question.data.questions});

    // this.setState({ questionData: qs.questions });

    var element = document.querySelectorAll("input");
    // console.log(element);
    element.forEach(el => {
      el.addEventListener("click", () => {
        this.pick(el);
      });
    });
  }

  clearChecked() {
    var element = document.querySelectorAll("input");
    // console.log(element);
    element.forEach(el => {
      el.checked = false;
      el.nextSibling.classList.remove("correct");
      el.nextSibling.classList.remove("wrong");
      el.disabled = false;
    });
  }
  pick(event) {
    this.clearChecked();
    this.disableInput();
    let keys = Object.keys(this.state.ansQues);
    var val = event.value;
    if (
      keys.includes(this.state.current) === false &&
      this.state.questionData[this.state.current].ans === val
    ) {
      this.state.ansQues[this.state.current] = { [val]: true };
      this.setState({ correctAns: this.state.correctAns + 1 });
      // event.nextSibling.style.backgroundColor='green';
      // event.nextSibling.style.color='#fff';
      event.nextSibling.classList.add("correct");
    } else {
      this.state.ansQues[this.state.current] = { [val]: false };
      event.nextSibling.classList.add("wrong");
    }
    // console.log(this.state);
  }

  disableInput() {
    var element = document.querySelectorAll("input");
    // console.log(element);
    element.forEach(el => {
      el.disabled = true;
    });
  }

  next() {
        let keys = Object.keys(this.state.ansQues);
            console.log("keys", keys);
    if (this.state.current !== this.state.questionData.length - 1) {
      console.log(this.state);
      this.clearChecked();

      let cur = this.state.current + 1;
       console.log(cur);
      if (keys.includes(cur.toString()) === true) {
        var elkey=Object.keys(this.state.ansQues[cur]);
        var mark = document.getElementById(elkey);
        console.log('it in there',mark.nextSibling);
        // mark.nextSibling.classList.add("correct");
       this.state.ansQues[cur][elkey] ? mark.nextSibling.classList.add("correct") : mark.nextSibling.classList.add("wrong");
        
        this.disableInput();
      }
          this.setState({ ...this.state, current: this.state.current + 1 });
    }

  }

  previous() {
    let keys = Object.keys(this.state.ansQues);
    console.log("keys", keys);

    if (this.state.current > 0) {
      this.setState({ ...this.state, current: this.state.current - 1 });
      // console.log(this.state);
      let cur = this.state.current - 1;
      this.clearChecked();
      if (keys.includes(cur.toString()) === true) {
        var elkey=Object.keys(this.state.ansQues[cur]);
        var mark = document.getElementById(elkey);
        console.log('',mark.nextSibling);
       this.state.ansQues[cur][elkey] ? mark.nextSibling.classList.add("correct") : mark.nextSibling.classList.add("wrong");
        
        this.disableInput();
      }
    }
  }
  render() {
    if (this.state.questionData.length > 0)
      var question = this.state.questionData[this.state.current].ques;
    return (
      <div className="quiz">
        <div className="question">
          <h3 class="question__title">{question}</h3>
        </div>
        <div className="option">
          <div className="option__A">
            <input type="radio" name="option" id="A" value="A" />
            <label for="A" class="test">
              {this.state.questionData.length > 0
                ? this.state.questionData[this.state.current].options["A"]
                : ""}
            </label>
          </div>
          <div className="option__B">
            <input type="radio" name="option" id="B" value="B" />
            <label for="B">
              {this.state.questionData.length > 0
                ? this.state.questionData[this.state.current].options["B"]
                : ""}
            </label>
          </div>
        </div>

        <div className="navigation">
          <button className="navigation__previous" onClick={this.previous}>
            Previous Question
          </button>
          <span>
            Question: {this.state.current + 1} /{" "}
            {this.state.questionData.length}{" "}
          </span>
          <button className="navigation__next" onClick={this.next}>
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

export default QA;
