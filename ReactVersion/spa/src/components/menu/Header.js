import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../../App.css";

class Header extends React.Component {
    render () {
        return (
            <div>
            <div className="header">
                <h1>S&J</h1>
                    <img className="menu-button" onClick={openMenu} src={require("../../img/nav-hamburger.png")} />
            </div>
        <div className="menu">
      <div className="menutop">
          <h1>S&J</h1>
          <img className="close-button" onClick={closeMenu} src={require("../../img/nav-hamburger-close.png")} />
      </div>
      <ul>
      <Link onClick={closeMenu} to="/">
        <li>Home</li>
        </Link>
        <Link onClick={closeMenu} to="/services">
        <li>Services</li>
        </Link>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
    </div>
    </div>
        )
    }
}

export default Header;

function openMenu() {
    let menu = document.querySelector(".menu");
    let menuButton = document.querySelector(".menu-button");
    menu.style.display = "block"
    menuButton.style.display = "none";
  }
  
function closeMenu() {
    let menu = document.querySelector(".menu");
    let menuButton = document.querySelector(".menu-button");
    menu.style.display = "none"
    menuButton.style.display = "block";
  }