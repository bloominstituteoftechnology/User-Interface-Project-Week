import React from "react";


class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div className="footer-container">
        <div>
          <h3>Interested in starting a project? </h3>
          <h2>Let’s talk:</h2>
          <form action="#">
            <input type="email" placeholder="Enter email" />
          </form>
  
          <p>We'll never share your email with anyone else.</p>
        </div>
        <div>
          <h2>New York</h2>
          <p>
            123 Lane<br />
            Suite 100<br />
            Albany, NY 12345<br />
            202 555 0144
          </p>
        </div>
        <div>
          <h2>Florida</h2>
          <p>
            Ocean Drive<br />
            Suite 201<br />
            Orlando, FL 22345<br />
            502 555 0144
          </p>
        </div>
        <div>
          <h2>California</h2>
          <p>
            Mountain Street<br />
            Suite 105<br />
            San Diego, CA 22345<br />
            702 555 0144
          </p>
        </div>
  
      </div>
      <p id="copyright">Copyright © 2018 Smith and Jones</p>
    </footer>
    )
  }
}

export default Footer;