import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./logo.css";

class Header extends React.Component {
    render () {
        return (
            <div>
            <div className="header">
            <div className="logo-text">
            <Link to='/'>
                <img className="logo" src={require("../../img/logo/SJlogo_transparent.png")}></img></Link>
                <Link to='/'><h1>S&J</h1></Link>
                
                </div>
                    <img className="menu-button" onClick={openMenu} src={require("../../img/nav-hamburger.png")} />
            </div>
        <div className="menu">
      <div className="menutop">
          <img className="close-button" onClick={closeMenu} src={require("../../img/nav-hamburger-close.png")} />
      </div>
      <ul>
      <Link onClick={closeMenu} to="/">
        <li>Home</li>
        </Link>
        <Link onClick={closeMenu} to="/services">
        <li>Services</li>
        </Link>
        <Link onClick={closeMenu} to="/packages">
        <li>Packages</li>
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