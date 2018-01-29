import React from 'react';

function Forms(){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputStyle: {

    }
  }
  return(
    <div style={styles.containerStyle}>
      <input />
      <textarea/>
      <input type="radio"/>
      <input type="checkbox"/>
    </div>
  );
}

export default Forms;
