import React, { Component } from 'react';
import Header from './components/home/Header';
import Login from './components/home/Login';


//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;