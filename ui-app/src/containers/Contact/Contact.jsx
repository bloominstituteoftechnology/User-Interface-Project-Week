import React, { Component } from 'react';
import Header from '../../shared/Header/Header';
import HeaderImg from '../../img/contact/contact-jumbotron.png';
import HeaderImgMobile from '../../img/contact/contact-mobile-jumbotron.png';

import ContactForm from '../../components/Contact/ContactForm/ContactForm';
import Addresses from '../../components/Footer/FooterAddress/FooterAddress';

import Css from './Contact.css';

class Contact extends Component {

    render(){
        const paragraph = '';
        const heading = <h1>Contact Us</h1>
        const header = <Header paragraph={paragraph} heading={heading} src={HeaderImg} srcMobile={HeaderImgMobile} alt="Header Img" />
        return (
            <div className={Css.Container}>
                {header}
                <main className={Css.ContactMain}>
			        <section className={Css.GetInTouch}>
			        	<h2>Get In Touch</h2>
			        	<ContactForm />
			        </section>
			        <section className={Css.WhereWeWork}>
			        	<h2>Where We Work</h2>
                        <Addresses />
			        </section>
		        </main>	
            </div>
        )
    }
}

export default Contact;