import React, { Component } from "react";
// import "./test2.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
// import history from "../history";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      Rpassword: "",
      isApproved: false,
    };
  }
  handleonChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, username, password, Rpassword } = e.target;
    let data = {
      username: username.value,
      email: email.value,
      password: password.value,
      Rpassword: Rpassword.value,
      isApproved: true,
    };
    let updatedData = new Array();
    updatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    console.log(updatedData);
    if (updatedData.some((v) => v.email === this.state.email)) {
      alert("email already exist");
    } else {
      updatedData.push(data);
      localStorage.setItem("user", JSON.stringify(updatedData));

      this.setState((prevState) => ({
        isApproved: !prevState.isApproved,
      }));
      this.props.history.push({
        pathname: `/Loginform`,
      });
    }
  };

  render() {
    return (
      <div className="big-form">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <span className="login-title">Signup</span>
          <label htmlFor="username">username</label>
          <input
            id="1"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleonChange}
            placeholder="enter your username"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="2"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleonChange}
            placeholder="enter your email"
          />
          {this.state.email == "" ? (
            <span style={{ color: "red" }}>please enter your email </span>
          ) : null}
          <label htmlFor="passowrd">Password</label>
          <input
            id="3"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleonChange}
            placeholder="enter your password"
          />

          {this.state.password == "" || this.state.password.length < 6 ? (
            <span style={{ color: "red" }}>not correct password </span>
          ) : null}
          <label htmlFor="r.password">Reapeat-password</label>
          <input
            id="4"
            name="Rpassword"
            type="password"
            value={this.state.Rpassword}
            onChange={this.handleonChange}
            placeholder="confirm password"
          />
          {this.state.Rpassword != this.state.password ? (
            <span style={{ color: "red" }}>not match </span>
          ) : null}

          <button type="submit" className="form-btn">
            submit
          </button>
          <Link to="/Loginform" className="login-link">
            i already have an account
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
