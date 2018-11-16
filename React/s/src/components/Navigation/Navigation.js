import React from 'react';
import Menu from './Menu';
import Topbar from './Topbar';

class Navigation extends React.Component {
  render() {
    return(
      <section className='navContainer'>
        <Topbar />
        <Menu />
      </section>
    );
  }
}

export default Navigation;
