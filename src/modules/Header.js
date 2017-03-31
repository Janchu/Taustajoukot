import React, { Component } from 'react';


const styles = {
  header: {
    backgroundColor: '#EA6611'
  },
  font: {
    color: '#FFFFFF'
  }
}

class Header extends Component {
  render() {
    return(
      <header style={styles.header}>
        <p style={styles.font}>Taustajoukot</p>
      </header>
    )
  }
}

export default Header;
