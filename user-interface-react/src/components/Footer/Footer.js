import React from 'react';
import Aox from './../../hoc/Aox';
import './Footer.css';

const footer = (props) => (
  <Aox>
    <footer>
      <div className="wrap">
        <div className="letsTalk">
          <h3>Interested in starting a project? </h3>
          <h3>Let’s talk:</h3>
          <input type="text" placeholder="Enter Email" />
          <p>We'll never share your email with anyone else.</p>
        </div>

        <div className="tabletFooter">
          <div className="card">
            <ul>
              <li>New York</li>
              <li>123 Lane</li>
              <li>Suite 100</li>
              <li>Albany, NY 12345</li>
              <li>202 555 0144</li>
            </ul>
          </div>

          <div className="card">
            <ul>
              <li>Florida</li>
              <li>Ocean Drive</li>
              <li>Suite 201</li>
              <li>Orlando, FL 22345</li>
              <li>502 555 0144</li>
            </ul>
          </div>

          <div className="card">
            <ul>
              <li>California</li>
              <li>Mountain Street</li>
              <li>Suite 105</li>
              <li>San Diego, CA 22345</li>
              <li>702 555 0144</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copy">Copyright &copy; 2018 Smith and Jones</p>
    </footer>
  </Aox>
);

export default footer;