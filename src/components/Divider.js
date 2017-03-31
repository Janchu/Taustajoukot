import React, { Component } from 'react';


const styles = {
  divider: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    color: '#ffffff',
    width: '90%',
  }
}

class Divider extends Component {
  render() {
    return(
      <hr style={styles.divider}/>
    )
  }
}

export default Divider;
