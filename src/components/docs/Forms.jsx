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
      border: '2px solid #3C3B3B'
    },
    radioContainer: {
      opacity: 0,

    }
  }
  return(
    <div style={styles.containerStyle}>
      <input style={styles.inputStyle} placeholder="Input"/>
      <textarea style={styles.inputStyle} placeholder="Text Area"/>
      <div className="radio-container">
        <input style={styles.radioStyle} type="radio"/>
        <input style={styles.radioStyle} type="radio"/>
        <input style={styles.radioStyle} type="radio"/>
      </div>
      <input type="checkbox"/>
      <input type="checkbox"/>
      <input type="checkbox"/>

      <style jsx>{`
        .radio-container input {
          opacity: 0;

        }
      `}</style>

    </div>
  );
}

export default Forms;
