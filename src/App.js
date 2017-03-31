import React, { Component } from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './modules/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
