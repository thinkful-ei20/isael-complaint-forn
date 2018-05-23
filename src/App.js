import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StaticForm from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StaticForm/>
      </div>
    );
  }
}

export default App;
