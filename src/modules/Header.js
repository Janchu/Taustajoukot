import React, { Component } from 'react';
import BannerImage from '../../public/img/taustajoukotbanneri200.png';


const styles = {
  header: {
    backgroundColor: '#EA6611',
    padding: 0,
    paddingTop: 10,
    margin: 0,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },
  font: {
    margin: 'auto',
    color: '#FFFFFF'
  },
  img: {
    width: '100%',
    maxWidth: 800,
    height: 'auto',
    padding: 0,
    margin: 'auto',
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
