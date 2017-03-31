import React, { Component } from 'react';


const styles = {
  section: {
    backgroundColor: '#EA6611'
  },
  font: {
    color: '#FFFFFF'
  }
}

class Home extends Component {
  render() {
    return(
      <section style={styles.section}>
        <p style={styles.font}>Taustajoukot</p>
      </section>
    )
  }
}

export default Home;
