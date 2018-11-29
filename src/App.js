import React, { Component } from 'react';
  
import './App.css';
import DisplayComponent from './components/mainComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <DisplayComponent/>
        </div>
      </div>
    );
  }
}

export default App;
