import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    userData: {
      username: "",
      password: ""
    },
    loginStatus: null
  };
  doLogin = e => {
    e.preventDefault();
    console.log(this.state);
    let url = "http://localhost:5000/login";
    axios.post(url, { ...this.state.userData }).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({ loginStatus: true });
        this.props.history.push(`/quiz`);
      }
    });
  };

  render() {
    const success = this.state.loginStatus ? "Login Successful" : "";
    return (
      <div className="loginPanel">
        <form onSubmit={this.doLogin} className="login">
          <h3>{success}</h3>
          <div className="login__username">
            <input
              type="text"
              className="login__userField"
              value={this.state.userData.username}
              onChange={e =>
                this.setState({ userData: { username: e.target.value } })
              }
            />
          </div>
          <div className="login__password">
            <input
              type="password"
              className="login__passField"
              value={this.state.userData.password}
              onChange={e =>
                this.setState({
                  userData: { ...this.state.userData, password: e.target.value }
                })
              }
            />
          </div>
          <button className="login__btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
