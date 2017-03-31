import React, { Component } from 'react';


const styles = {
  footer: {
    backgroundColor: '#eeeeee',
    padding: 0,
    margin: 0,
    height: 80,
  },
  font: {
    margin: 'auto',
    color: '#000000'
  }
}

class Footer extends Component {
  render() {
    return(
      <footer style={styles.footer}>
        <p style={styles.font}>© 2017. Taustajoukot. All Rights Reserved.</p>
        <a href="http://www.freepik.com/free-photos-vectors/man">Man vector created by Freepik</a>
      </footer>
    )
  }
}

export default Footer;
