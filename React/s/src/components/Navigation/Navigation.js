import React from 'react';
import Menu from './Menu';
import Topbar from './Topbar';

class Navigation extends React.Component {
    state = {
      showMenu: false,
      menuStart: 'menu',
      toggleMenu: () => this.setState(prevState => { return {showMenu: !prevState.showMenu} }),
    }

  render() {
    let menu = <Menu show={this.state.showMenu} toggle={ this.props.toggle } start={ this.state.menuStart }/>;

    if(this.state.showMenu) {
      menu = <Menu show={this.state.showMenu} toggle={ this.props.toggle }/>
    }

    return(
      <section className='navContainer'>
        <Topbar show={ this.state.toggleMenu } />
        {menu}
      </section>
    );
  }
}

export default Navigation;
