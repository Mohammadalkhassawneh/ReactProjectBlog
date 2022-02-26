import React, { Component } from "react";
import "../Header/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-logo">
            <img className="logo-img" src="./bkalkhadra97png.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
