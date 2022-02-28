import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./components/forms/Form";
import Loginform from "./components/forms/Loginform";
import "./App.css";
import Share from "./components/share/Share";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      newMe: "",

      userAvatar: "https://picsum.photos/id/237/200/300",
    };
  }
  handlePost = (e) => {
    this.setState({
      newMe: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("heet");
    const { newMe } = this.state;
    this.setState({ post: [...this.state.post, newMe] });
    // this.setState({ post: "" });
    this.setState({ countLike: 0 });
  };

  render() {
    return (
      <Router>
        <Header />
        {/* <Header /> */}
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/Loginform">
          <Loginform />
        </Route>
        <Route path="/share">
          <Share
            post={this.state.post}
            willOnChange={this.handlePost}
            willOnSubmit={this.handleSubmit}
            willhandleLikeBtn={this.handleLikeBtn}
            userAvatar={this.state.userAvatar}
          />
          {/* <Post
            post={this.state.post}
            willhandleLikeBtn={this.handleLikeBtn}
            counterLikes={this.state.countLike}
          /> */}
        </Route>
        {/* <Route path="/signup2">
          <Signup /> */}
        {/* <Post
            post={this.state.post}
            willhandleLikeBtn={this.handleLikeBtn}
            counterLikes={this.state.countLike}
          /> */}
        {/* </Route> */}

        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        {/* <Route path="/counter">
          <h2>Total:{this.state.total}</h2>
          {this.state.counter.map((items) => (
            <Counters
              key={items.key}
              option={items.item}
              yourNumber={items.counterOne}
              id={items.id}
              willIncrease={this.handleFirstClick}
              willDecrease={this.handleSecondClick}
            />
          ))}
        </Route> */}

        {/* <Loginform /> */}
      </Router>
    );
  }
}

export default App;
