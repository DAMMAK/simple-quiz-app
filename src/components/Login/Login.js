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
    loginStatus: null,
    error: null
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
      if (res.status === 400) {
        this.setState({ loginStatus: false });
      }
    });
  };

  render() {
    const success = this.state.loginStatus ? "Login Successful" : "";
    const error =
      this.state.loginStatus === false ? "Wrong Username / Password" : "";

    return (
      <div className="loginPanel">
        <form onSubmit={this.doLogin} className="login">
          <h3>{success}</h3>
          <h3>{error}</h3>
          <div className="login__username">
            <input
              type="text"
              placeholder="Username"
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
              placeholder="Password"
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
