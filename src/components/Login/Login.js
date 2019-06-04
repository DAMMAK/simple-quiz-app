import React, {Component} from "react";
import axios from "axios";
import "./Login.scss";

class Login extends Component{

  state={
    username:'',
    password: ''
  }
  doLogin = e => {
    e.preventDefault();
    let url ='http://localhost:5000/login'
    axios.post(url,{...this.state}).then((res)=>{
      console.log(res)
    })
  };

  render(){

     return (
    <div className="loginPanel">
      <form onSubmit={this.doLogin} className="login">
        <div className="login__username">
          <input type="text" className="login__userField"
           value={this.state.username} onChange={(e)=>this.setState({...this.state,username:e.target.value})} />
        </div>
        <div className="login__password">
          <input type="password"  className="login__passField"
          value={this.state.password} onChange={(e)=>this.setState({...this.state, password: e.target.value})} />
        </div>
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
  }
}

export default Login;
