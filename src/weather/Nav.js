import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-title"><Link to="/">Weather App</Link></div>
        <div>
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact={true}
                  activeStyle={{ fontWeight: "bold", color: "red" }}
                >
                  Get Weather
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  activeStyle={{ fontWeight: "bold", color: "red" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/example"
                  activeClassName="active"
                  activeStyle={{ fontWeight: "bold", color: "red" }}
                >
                  Example
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Nav;
