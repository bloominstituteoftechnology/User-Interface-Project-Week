import React from 'react';

import FooterAddress from './FooterAddress/FooterAddress';

import Css from './Footer.css';

const Footer = () => (
    <footer>
        <section className={Css.FooterMainContent}>
		    <div className={Css.SubmitEmail}>
		    	<h3>Interested in starting a project? <br /> Let’s talk:</h3>
		    	<input type="email" name="email" placeholder="Enter email" />
		    	<p>We'll never share your email with anyone else.</p>
		    </div>
            <FooterAddress />
		</section>
		<p className={Css.Copyright}>Copyright © 2018 Smith and Jones</p>
    </footer>
)

export default Footer;