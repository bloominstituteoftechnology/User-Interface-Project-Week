import React, { Component } from 'react';
import './css/index.css';

import Footer from './components/FooterContact/Footer';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navigation from './components/Navigation/Navigation';


class App extends Component {

  state = {
    page: 'home',
    jumboSize: 'large',
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron size={ this.state.jumboSize }/>
        <Footer />
      </div>
    );
  }
}

export default App;
