import React, { Component } from 'react';
import './css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from './Components/Views/Home';
import AboutUs from './Components/Views/AboutUs';

import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/About-Us" component={ AboutUs } />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
