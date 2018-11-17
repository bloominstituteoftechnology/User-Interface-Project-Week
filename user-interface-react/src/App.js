import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
        </Layout>
      </div>
    );
  }
}

export default App;
