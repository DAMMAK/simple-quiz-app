import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login/Login";
import QA from "./components/Quiz/QA";
import { Route, BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/quiz" component={QA} />
      </BrowserRouter>
    </div>
  );
}

export default App;
