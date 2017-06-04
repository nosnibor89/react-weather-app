import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./Nav";
import Weather from "./Weather";
import About from "./About";
import Example from "./Example";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <Route path="/" exact={true} component={Weather} />
          <Route path="about" component={About} />
          <Route path="example" component={Example} />
        </div>
      </div>
    );
  }
}

export default Main;
