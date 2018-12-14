import React from "react";

import jumboDesktop from "./img/contact/contact-jumbotron.png";
import jumboMobile from "./img/contact/contact-mobile-jumbotron.png";

const Contact = () => {
  return (
    // header
    <div className="container contact-page">
      <section className="header-section">
        <header>
          <img src={jumboDesktop} alt="" className="img--desktop" />
          <img src={jumboMobile} alt="" className="img--mobile" />
          <h1>Contact Us</h1>
        </header>
      </section>
      {/* main content */}
      <section className="contact-main">
        <div className="left-content">
          <h2>Get In Touch</h2>
          <form action="#">
            <label>
              Email address
              <br />
            </label>
            <input type="text" placeholder="Enter email" className="emailbox" />
            <div className="lower-text">
              We'll never share your email with anyone else.
            </div>
            <label>How many buildings do you need planned?</label>
            <select name="numOfBuildings">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
            <br />
            <label>Provide a brief overview of your project needs:</label>
            <br />
            <br />
            <textarea name="message" rows="10" cols="30" />
            <br />
            <br />
            <p>
              <input type="radio" /> I am a small business
            </p>
            <br />
            <p>
              <input type="radio" /> I am a residential owner
            </p>
            <br />
            <p>
              <input type="radio" /> I am a corporation
            </p>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="right-content">
          <h2>Where We Work</h2>
          <div>
            <h2>New York</h2>
            <p>
              123 Lane
              <br />
              Suite 100
              <br />
              Albany, NY 12345
              <br />
              202 555 0144
            </p>
          </div>
          <div>
            <h2>Florida</h2>
            <p>
              Ocean Drive
              <br />
              Suite 201
              <br />
              Orlando, FL 22345
              <br />
              502 555 0144
            </p>
          </div>
          <div>
            <h2>California</h2>
            <p>
              Mountain Street
              <br />
              Suite 105
              <br />
              San Diego, CA 22345
              <br />
              702 555 0144
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
