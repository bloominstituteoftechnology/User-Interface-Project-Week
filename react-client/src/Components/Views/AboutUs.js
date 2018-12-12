import React, { Component } from 'react';
import Carousel from '../Carousel';
//images
import About1 from '../../img/aboutus/img1.jpg';
import About2 from '../../img/aboutus/img2.jpg';
import About3 from '../../img/aboutus/img3.jpg';


class AboutUs extends Component {
  render() {
    return (
        <div class="aboutus">
        <Carousel title="About Us"/>
            <div class="main-content">
		        <div class="about-panel">
		        	<h2>We're Global</h2>
		        	<div class="text">
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        	</div>
		        	<div class="image">
		        		<img src={About1} alt="Inside of a hollow tower" />
		        	</div>
		        </div>

		        <div class="about-panel">
		        	<h2>Award Winning</h2>
		        	<div class="image">
		        			<img src={About2} alt="Symmetrical Cathedral" />
		        		</div>
		        	<div class="text">
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        	</div>
		        </div>

		        <div class="about-panel">
		        	<h2>Experienced</h2>
		        	<div class="text">
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        			<p>Et sed autem causae appareat, tempor abhorreant  te 	mei, facer facilisis sit ea. Eu timeam vidisse  consectetuer sed. Duo etiam laboramus dissentiet in,  nec no errem</p>
		        	</div>
		        	<div class="image">
		        		<img src={About3} alt="Glass building, Clouds in the sky behind it." />
		        	</div>
		        </div>
        
	        </div>
        </div>
    );
  }
}

export default AboutUs;