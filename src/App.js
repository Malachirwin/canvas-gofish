import React from 'react';
import './App.css';
import Login from './Login.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello Welcome to Go Fish</p>
          <Login />
        </header>
      </div>
    );
  }
}

export default App;
