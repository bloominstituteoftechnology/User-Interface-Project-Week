import React, { Component, Suspense, lazy } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Home from './containers/Home/Home';
import Layout from './shared/Layout/Layout';
import Services from './containers/Services/Services';

const LazyContact = lazy(() => import('./containers/Contact/Contact'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={LazyContact} />
            <Route path="/services" component={Services} />
            <Redirect to="/" />
          </Switch>
          </Suspense>
        </Layout>
      </div>
    );
  }
}

export default App;
