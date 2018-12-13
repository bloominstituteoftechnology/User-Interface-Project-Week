import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from './Home';
import Services from './Services';
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLoad: false
    }
  }
  handleChange = ()=> {
    this.setState(prevState => ({onLoad: !prevState.onLoad}))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav onLoad={this.state.onLoad} handleChange={this.handleChange}/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
