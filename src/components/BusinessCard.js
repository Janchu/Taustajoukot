import React, { Component } from 'react';


const styles = {
  flexItem: {
    margin: 20,
  },
  h5: {
    fontFamily: 'Open Sans',
  },
  p: {
    fontFamily: 'Open Sans',
    fontSize: 14,
  },
}


class BusinessCard extends Component {
  render() {
    return(
      <div style={styles.flexItem}>
        <h5 style={styles.h5}>{this.props.position}</h5>
        <p style={styles.p}>{this.props.address}{this.props.name}<br/>
          {this.props.phone}<br/>
          {this.props.email}</p>
      </div>
    )
  }
}

export default BusinessCard;
