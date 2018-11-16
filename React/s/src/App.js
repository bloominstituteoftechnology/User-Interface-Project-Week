import React, { Component } from 'react';
import './css/index.css';

import Footer from './components/FooterContact/Footer';
import Navigation from './components/Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
