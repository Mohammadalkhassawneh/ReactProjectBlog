import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// import "/src/index.css";
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      //   adminUser :[{
      //       adminEmail:"admin@gmail.com",
      //       adminPassword:"123456"
      //   }]
    };
  }
  handleonChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { loginEmail, loginPassword } = e.target;
    let loginData = {
      loginEmail: loginEmail.value,
      loginPassword: loginPassword.value,
    };
    let loginUpdatedData = new Array();
    loginUpdatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];
    console.log(this.state.loginEmail);
    if (loginUpdatedData.some((c) => c.email === this.state.loginEmail)) {
      this.props.history.push({
        pathname: `/share`,
      });
    } else {
      alert("incorrect email ");
    }
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleLoginSubmit} className="login-form">
          <span className="login-title">Login</span>
          <label>Email</label>
          <input
            name="loginEmail"
            type="email"
            value={this.state.loginEmail}
            onChange={this.handleonChange}
            placeholder="enter your email"
            required
          />
          <label>password</label>
          <input
            name="loginPassword"
            type="password"
            value={this.state.loginPassword}
            onChange={this.handleonChange}
            placeholder="enetr your password"
            required
          />
          <button className="login-btn">submit</button>
          <Link to="/" className="login-link">
            i don't have an account
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Loginform);
