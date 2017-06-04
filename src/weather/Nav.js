import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import './Nav.scss';
class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-title"><Link to="/"><strong>Weather App</strong></Link></div>
        <div>
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <NavLink
                  to="/"
                  activeClassName="w-active"
                  exact={true}
                >
                  Get Weather
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="w-active"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/example"
                  activeClassName="w-active"
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
