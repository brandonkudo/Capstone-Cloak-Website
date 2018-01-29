import React from 'react';

function Forms(){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputStyle: {
      width: '400px',
      border: '3px solid #3C3B3B',
      padding: '3px',
      marginBottom: '20px',
      color: '#3C3B3B'
    },
    radioStyle: {
      
    }
  }
  return(
    <div style={styles.containerStyle}>
      <input style={styles.inputStyle} placeholder="Input"/>
      <textarea style={styles.inputStyle} placeholder="Text Area"/>
      <input type="radio"/>
      <input type="radio"/>
      <input type="radio"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>
    </div>
  );
}

export default Forms;
