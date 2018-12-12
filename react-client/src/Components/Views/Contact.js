import React, { Component } from 'react';
import Carousel from '../Carousel';

//Components


class App extends Component {
  render() {
    return (
      <div className="contact">
        <Carousel title="Contact" />
        <section class="main-content">
		    <div class="get-in-touch">
		    	<h2>Get In Touch</h2>
		    	<form onsubmit="return false;">
		    		<label for="email">Email address</label>
		    		<input type="email" placeholder="Enter email" />
		    		<span>Well never share your email with anyone else.</span>
		    		<label for="buildings" class="top-margin">How Many Buildings Do You Need Planned?</label>
		    		<input type="number" value="1" />
		    		<label for="info" class="top-margin">Provide a brief overview of your project needs:</label>
		    		<textarea name="info" rows="8"></textarea>
		    		<div class="radio-button">
		    			<input type="radio" name="radio" value="I am a small business" checked />
		    			<label for="I am a small business">I am a small business</label>
		    		</div>
		    		<div class="radio-button">
		    			<input type="radio" name="radio" value="I am a residential owner" />
		    			<label for="I am a residential owner">I am a residential owner</label>
		    		</div>
		    		<div class="radio-button">
		    			<input type="radio" name="radio"value="I am a corporation" />
		    			<label for="I am a corporation">I am a corporation</label>
		    		</div>
		    		<input type="submit" value="Submit" />
		    	</form>
		    </div>

		    <div class="where-we-work">
		    	<h2>Where We Work</h2>
		    	<div class="location">
		    		<h3>New York</h3>
		    		<address>
		    			123 Lane <br />
		    			Suite 100 <br />
		    			Albany, NY 12345 <br />
		    			202 555 0144
		    		</address>
		    	</div>
        
		    	<div class="location">
		    	<h3>Florida</h3>
		    		<address>
		    			Ocean Drive <br />
		    			Suite 201 <br />
		    			Orlando, FL 22345 <br />
		    			502 555 0144
		    		</address>
		    	</div>

		    	<div class="location">
		    		<h3>California</h3>
		    		<address>
		    			Mountain Street <br />
		    			Suite 105 <br />
		    			San Diego, CA 22345 <br />
		    			702 555 0144
		    		</address>
		    	</div>
		    </div>
		
	    </section>
      </div>
    );
  }
}

export default App;