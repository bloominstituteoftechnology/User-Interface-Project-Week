import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Error from "./Error";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      onLoad: false,
      isClicked: true
    };
  }
  handleChange = () => {
    this.setState(prevState => ({ onLoad: !prevState.onLoad }));
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 30000);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div
            className={this.state.isClicked ? "redblock" : "banana redblock"}
          >
            <h1>YOU'VE BEEN HACKED</h1>
            <div
              className="redfont"
              onClick={() => {
                this.setState(prevState => ({
                  isClicked: !prevState.isClicked
                }));
              }}
            >
              {" "}
              jk
            </div>
          </div>
          <Nav onLoad={this.state.onLoad} handleChange={this.handleChange} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
