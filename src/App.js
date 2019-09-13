import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import QA from "./components/Quiz/QA";
import Result from "./components/Result/Result";

import { Route, BrowserRouter, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/quiz" component={QA} />
        <Route path="/result" component={Result} />

      </BrowserRouter>
    </div>
  );
}

export default App;
