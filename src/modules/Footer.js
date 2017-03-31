import React, { Component } from 'react';


const styles = {
  footer: {
    backgroundColor: '#EA6611'
  },
  font: {
    color: '#FFFFFF'
  }
}

class Footer extends Component {
  render() {
    return(
      <footer style={styles.footer}>
        <p style={styles.font}>© 2017. Taustajoukot. All Rights Reserved.</p>
      </footer>
    )
  }
}

export default Footer;
