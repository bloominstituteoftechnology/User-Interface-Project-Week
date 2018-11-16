import React, { Component } from 'react';
import './css/index.css';

import Footer from './components/FooterContact/Footer';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navigation from './components/Navigation/Navigation';


class App extends Component {

  state = {
    page: 'home',
    jumboSize: 'large',

    toggleJumboSize: (event) => {
      event.persist()
      this.setState(prevState => { return {page: event.target.innerText.toLowerCase()} })
    }
  }

  render() {
    console.log(this.state.page)
    if(this.state.page === "home") {
      this.state.jumboSize = 'large';
    } else {
      this.state.jumboSize = 'small';
    }

    return (
      <div className="App">
        <Navigation homeState={this.state} toggle={ this.state.toggleJumboSize.bind(this) }/>
        <Jumbotron size={ this.state.jumboSize } page={this.state.page}/>
        <Footer />
      </div>
    );
  }
}

export default App;
