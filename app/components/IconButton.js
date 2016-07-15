'use strict';

import React from 'react';

const IconButton = function(props){
  const styles = {
    button: {
      padding: '0',
      margin: '0',
      color: '#000',
      fontSize: '1.5rem'
    },
    container: {
      margin: '2rem'
    }
  }
  return(
    <span style={styles.container}>
      <a style={styles.button} className="button button-clear" href={props.href}>{props.label}</a>
    </span>
  );
}

export default IconButton;
