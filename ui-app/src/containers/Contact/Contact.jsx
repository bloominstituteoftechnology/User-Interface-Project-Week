import React, { Component } from 'react';
import Header from '../../shared/Header/Header';
import HeaderImg from '../../img/contact/contact-jumbotron.png';

import Css from './Contact.css';

class Contact extends Component {

    render(){
        const paragraph = '';
        const heading = <h1>Contact Us</h1>
        const header = <Header paragraph={paragraph} heading={heading} src={HeaderImg} alt="Header Img" />
        return (
            <div className={Css.Container}>
                {header}
            </div>
        )
    }
}

export default Contact;