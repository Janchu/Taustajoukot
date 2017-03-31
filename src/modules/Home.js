import React, { Component } from 'react';
import Kastellilogo from '../../public/img/Kastellilogo.png';
import Omatalologo from '../../public/img/Omatalologo.png';
import Sievitalologo from '../../public/img/Sievitalologo.png';
import Paku from '../../public/img/paku1_2.png';
import Ukko from '../../public/img/ukko1_3.png';
import contactInformation from '../../contactInformation';

const styles = {
  h1: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#EA6611'
  },
  h5: {
    fontFamily: 'Open Sans',
  },
  p: {
    fontFamily: 'Open Sans',
    fontSize: 14,
  },
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexItem: {
    margin: 20,
  },
  paku: {
    width: '50%',
    maxWidth: 400,
    height: 'auto',
  },
  ukko: {
    width: '15%',
    maxWidth: 120,
    height: 'auto',
  }
}

class Home extends Component {
  render() {
    return(
      <article>
        <section>
          <h1 style={styles.h1}>TALOTEHTAIDEN KUMPPANI LOGISTIIKASSA, RAKENNUSMATERIAALIEN KÄSITTELYSSÄ,
            TYÖMAIDEN TURVALLISUUDESSA JA SIISTEYDESSÄ</h1>
          <img style={styles.paku} src={Paku} alt='Taustajoukot'/>
          <img style={styles.ukko} src={Ukko} alt='Taustajoukot'/>
        </section>

        <hr width='95%'/>

        <section>
          <h1 style={styles.h1}>YHTEYSTIEDOT</h1>
          <div style={styles.flex}>
            <div style={styles.flexItem}>
              <h5 style={styles.h5}>{contactInformation.office.role}</h5>
              <p style={styles.p}>{contactInformation.office.address}<br/>
                {contactInformation.office.phone}<br/>
                {contactInformation.office.email}</p>
            </div>
            <div style={styles.flexItem}>
              <h5 style={styles.h5}>{contactInformation.person1.role}</h5>
              <p style={styles.p}>{contactInformation.person1.name}<br/>
                {contactInformation.person1.phone}<br/>
                {contactInformation.person1.email}</p>
            </div>
            <div style={styles.flexItem}>
              <h5 style={styles.h5}>{contactInformation.person2.role}</h5>
              <p style={styles.p}>{contactInformation.person2.name}<br/>
                {contactInformation.person2.phone}<br/>
                {contactInformation.person2.email}</p>
            </div>
          </div>

        </section>

        <hr width='95%'/>

        <section>
          <h1 style={styles.h1}>YHTEISTYÖKUMPPANIMME</h1>
            <div style={styles.flex}>
              <img style={styles.flexItem} src={Kastellilogo} alt='Kastelli'/>
              <img style={styles.flexItem} src={Sievitalologo} alt='Sievetalo'/>
              <img style={styles.flexItem} src={Omatalologo} alt='Omatalo'/>
            </div>
        </section>
      </article>
    )
  }
}

export default Home;
