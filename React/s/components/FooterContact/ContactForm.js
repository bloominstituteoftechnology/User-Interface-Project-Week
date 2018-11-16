import React from 'react';

class ContactForm extends React.Component {
  render() {
    <footer>
  		<div className="footer__contact">
  			<form className="footer__contact__email">
  				<h3>
  					Interested In Starting A Project? <br>
  					Let's Talk:
  				</h3>
  				<input type="text" name="email" placeholder="Enter email">
  				<p>We'll never share your email with anyone else</p>
  			</form>

  			<address>
  				<h3>New York</h3>
  				<p>123 Lane</p>
  				<p>Suite 100</p>
  				<p>Albany, NY 12345</p>
  				<p>202 555 0144</p>
  			</address>

  			<address>
  				<h3>Florida</h3>
  				<p>Ocean Drive</p>
  				<p>Suite 201</p>
  				<p>Orlando, FL 22345</p>
  				<p>502 555 0144</p>
  			</address>

  			<address>
  				<h3>California</h3>
  				<p>Mountain Street</p>
  				<p>Suite 105</p>
  				<p>San Diego, CA 22345</p>
  				<p>702 555 0144</p>
  			</address>
  		</div>

  		<p id="copyright">Copyright &copy; 2018 Smith and Jones</p>
  	</footer>
  }
}
