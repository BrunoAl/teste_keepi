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

        <div className="App-intro">
          <div>
            <h3 className="Content-title">Meu Git, Minha Vida</h3>
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
