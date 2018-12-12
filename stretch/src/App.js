import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import '../src/index';

import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
      </div>

      </BrowserRouter>
    );
  }
}


export default App;
