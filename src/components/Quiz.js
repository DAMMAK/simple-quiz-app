import React, { useState } from "react";
import Login from "./Login/Login";
import QA from "./Quiz/QA";
import { Route, BrowserRouter } from "react-router-dom";

const Quiz = () => {
  const [state, setState] = useState({
    login: false
  });

  return (
    <React.Fragment>
      <BrowserRouter>
        <h1>Quiz Application</h1>
        <Login />
        <Route path="/" components={Login} />
        <Route path="/quiz" components={QA} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Quiz;
