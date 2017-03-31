import React, { Component } from 'react';
import Kastellilogo from '../../public/img/Kastellilogo.png';
import Omatalologo from '../../public/img/Omatalologo.png';
import Sievitalologo from '../../public/img/Sievitalologo.png';
import Paku from '../../public/img/paku1_2.png';
import Ukko from '../../public/img/ukko1_3.png';
import BusinessCard from '../components/BusinessCard';
import PartnerLogo from '../components/PartnerLogo';
import Divider from '../components/Divider';
import contactInformation from '../utils/contactInformation';


const styles = {
  section: {
    padding: 20,
  },
  article: {
    maxWidth: 1080,
    margin: 'auto',
  },
  h1: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#EA6611'
  },
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paku: {
    width: '50%',
    maxWidth: 400,
    height: 'auto',
    margin: 20,
  },
  ukko: {
    width: '15%',
    maxWidth: 120,
    height: 'auto',
    margin: 20,
  }
}

class Home extends Component {
  render() {
    return(
      <article style={styles.article}>
        <section style={styles.section}>
          <h1 style={styles.h1}>TALOTEHTAIDEN KUMPPANI LOGISTIIKASSA, RAKENNUSMATERIAALIEN KÄSITTELYSSÄ,
            TYÖMAIDEN TURVALLISUUDESSA JA SIISTEYDESSÄ</h1>
          <img style={styles.paku} src={Paku} alt='Taustajoukot'/>
          <img style={styles.ukko} src={Ukko} alt='Taustajoukot'/>
        </section>

        <Divider />

        <section>
          <h1 style={styles.h1}>YHTEYSTIEDOT</h1>
          <div style={styles.flex}>
            <BusinessCard
              position={contactInformation.office.position}
              address={contactInformation.office.address}
              phone={contactInformation.office.phone}
              email={contactInformation.office.email}
            />
            <BusinessCard
              position={contactInformation.person1.position}
              address={contactInformation.person1.name}
              phone={contactInformation.person1.phone}
              email={contactInformation.person1.email}
            />
            <BusinessCard
              position={contactInformation.person2.position}
              address={contactInformation.person2.name}
              phone={contactInformation.person2.phone}
              email={contactInformation.person2.email}
            />
          </div>
        </section>

        <Divider />

        <section>
          <h1 style={styles.h1}>YHTEISTYÖKUMPPANIMME</h1>
            <div style={styles.flex}>
              <PartnerLogo src={Kastellilogo} alt='Kastelli'/>
              <PartnerLogo src={Sievitalologo} alt='Sievetalo'/>
              <PartnerLogo src={Omatalologo} alt='Omatalo'/>
            </div>
        </section>
      </article>
    )
  }
}

export default Home;
