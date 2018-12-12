import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
        <footer data-aos="fade-up">
	        <div class="footer-content">
	    	<div class="footer-panel contact">
	    		<h3>Interested in starting a project?</h3>
	    		<h3>Let's talk:</h3>
	    		<input type="text" placeholder="Enter email" />
	    		<p>We'll never share your email with anyone else.</p>
	    	</div>
	    	<div class="footer-panel address">
	    		<h3>New York</h3>
	    		<address>
	    			123 Lane<br/>
	    			Suite 100<br/>
	    			Albany, NY 12345<br/>
	    			202 555 0144
	    		</address>
	    	</div>
	    	<div class="footer-panel address">
	    			<h3>Florida</h3>
	    			<address>
	    				Ocean Drive<br/>
	    				Suite 201<br/>
	    				Orlando, FL 22345<br/>
	    				502 555 0144
	    			</address>
	    		</div>
	    		<div class="footer-panel address">
	    			<h3>California</h3>
	    			<address>
	    				Mountain Street<br/>
	    				Suite 105<br/>
	    				San Diego, CA 22345<br/>
	    				702 555 0144
	    			</address>
	    		</div>
	    		<div class="copyright">
	    			<span>Copyright © 2018 Smith and Jones</span>
	    		</div>
	    	</div>
	    </footer>
    );
  }
}

export default Footer;