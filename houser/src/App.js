import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { route }
      </div>
    );
  }
}

export default App;
