import React, { Component } from 'react';
  
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
      </div>
    );
  }
}

export default App;
