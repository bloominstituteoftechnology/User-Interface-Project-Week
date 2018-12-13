import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import Layout from './shared/Layout/Layout';
import Services from './containers/Services/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
