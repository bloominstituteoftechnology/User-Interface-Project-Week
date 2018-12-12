import React from "react";
import jumboDesktop from "./img/home/home-jumbotron.png";
import jumboMobile from "./img/home/home-mobile-jumbotron.png";

class Header extends React.Component {
  render() {
    return (
      <section className="header-section">
        <header>
          <img src={jumboDesktop} alt="" class="img--desktop" />
          <img src={jumboMobile} alt="" className="img--mobile" />
          <h1>
            Integrity,
            <br />
            Excellence,
            <br />
            Progress.
          </h1>
        </header>
      </section>
    );
  }
}

export default Header;
