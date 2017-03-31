import React, { Component } from 'react';
import BannerImage from '../../public/img/taustajoukotbanneri200.png';


const styles = {
  header: {
    backgroundColor: '#EA6611',
    padding: 0,
    margin: 0,
  },
  font: {
    margin: 'auto',
    color: '#FFFFFF'
  },
  img: {
    width: '100%',
    height: 'auto',
    maxWidth: 1080,
    padding: 0,
    margin: 0,
  }
}

class Header extends Component {
  render() {
    return(
      <header style={styles.header}>
        <img style={styles.img} src={BannerImage} alt='Rakentajan Taustajoukot'/>
      </header>
    )
  }
}

export default Header;
