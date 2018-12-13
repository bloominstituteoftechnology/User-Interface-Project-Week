import React from "react";
import { NavLink } from "react-router-dom";

import burger from "./img/nav-hamburger.png";
import burgerClose from "./img/nav-hamburger-close.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-bar">
        <div
          className={
            this.props.onLoad ? "nav--clicked nav-container" : "nav-container"
          }
        >
          <NavLink to="/" className="navh2">
            <h2>S&J</h2>
          </NavLink>
          <nav className={this.props.onLoad ? "nav-open" : "nav-close"}>
            <NavLink to="/" onClick={() => this.props.handleChange()}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => this.props.handleChange()}>
              Services
            </NavLink>
            <NavLink to="/contact" onClick={() => this.props.handleChange()}>
              Contact
            </NavLink>
          </nav>
          <div className="burger" onClick={() => this.props.handleChange()}>
            <img
              src={burger}
              alt="hamburger menu img"
              className={this.props.onLoad ? "nav-close" : "nav-open"}
            />
            <img
              src={burgerClose}
              alt=""
              className={this.props.onLoad ? "nav-open" : "nav-close"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
