import React, { Component } from 'react';


const styles = {
  footer: {
    backgroundColor: '#424242',
    margin: 0,
    marginTop: 20,
    minHeight: 300,
  },
  footerContent: {
    maxWidth: 1080,
    margin: 'auto',
    padding: 10,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: '#bdbdbd',
  }
}

class Footer extends Component {
  render() {
    return(
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.9154043852878!2d24.17815487366108!3d60.28279273224784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468dc033a543748d%3A0x73161539b683af54!2sRakentajan+taustajoukot+Oy!5e0!3m2!1sfi!2sfi!4v1490985324754"
            width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
            <p style={styles.font}>
              <a style={styles.font} href="https://jannejappinen.me">Website created by Janne Jäppinen</a><br/>
            <a style={styles.font} href="http://www.freepik.com/free-photos-vectors/man">Man vector created by Freepik</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer;
