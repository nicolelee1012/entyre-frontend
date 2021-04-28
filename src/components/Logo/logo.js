import React, { Component } from "react";
import "../Vector.png";

export default class Logo extends Component {
  render() {
    return (
      <header>
        <p>hello</p>
        <img
          className="logo"
          src="../Vector.png"
          height="100px"
          width="200px"
          alt="description of "
        ></img>
      </header>
    );
  }
}
