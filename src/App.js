import React, { Component } from 'react';
import './App.css';

import AuthContainer from './components/AuthContainer/AuthContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AuthContainer/>
      </div>
    );
  }
}

export default App;
