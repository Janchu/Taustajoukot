import React, { Component } from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Home from './modules/Home';
import '../public/App.css';


const styles = {
  wrapper: {
    minHeight: '100%',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -140,
  },
  pull: {
    height: 140,
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.wrapper}>
          <Header />
          <Home />
          <div style={styles.pull}></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
