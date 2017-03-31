import React, { Component } from 'react';


const styles = {
  flexItem: {
    margin: 20,
  },
}


class PartnerLogo extends Component {
  render() {
    return(
      <div style={styles.flexItem}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
}

export default PartnerLogo;
