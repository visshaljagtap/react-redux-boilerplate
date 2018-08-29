import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Body Part</div>
        <Link to="/test">
          <button>Test</button>
        </Link>
      </Layout >
    );
  }
}

export default App;
