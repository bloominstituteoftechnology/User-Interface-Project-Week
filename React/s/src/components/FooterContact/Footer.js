import React from 'react';

import ContactForm from './ContactForm';
import Copyright from './Copyright';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ContactForm />
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
