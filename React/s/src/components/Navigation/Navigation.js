import React from 'react';
import Menu from './Menu';
import Topbar from './Topbar';

class Navigation extends React.Component {

    state = {
      showMenu: false,
      toggleMenu: () => this.setState(prevState => { return {showMenu: !prevState.showMenu} }),
    }

  render() {
    let menu;

    if(this.state.showMenu) {
      menu = <Menu show={this.state.showMenu}/>
    }

    return(
      <section className='navContainer'>
        <Topbar show={ this.state.toggleMenu }/>
        {menu}
      </section>
    );
  }
}

export default Navigation;
