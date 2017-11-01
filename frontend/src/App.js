import React, { Component } from 'react';
import './App.css';
import Table from './components/TableDirectoryComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Keep.i Fullstack Test</h1>

        </header>
        <p className="App-intro">
          <Table />
        </p>
      </div>
    );
  }
}

export default App;
