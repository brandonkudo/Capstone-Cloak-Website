import React from 'react';

function Item(props){
  const styles = {
    wrapperStyle: {
      padding: '25px'
    },
    titleStyle: {
      textTransform: 'uppercase',
      marginBottom: '30px'
    },
    exampleStyle: {
      marginBottom: '30px'
    },
    bodyStyle: {
      marginBottom: '30px'
    },
    snippetStyle: {
      backgroundColor: '#D8D8D8',
      padding: '10px',
      marginBottom: '30px',
      border: '1px solid grey'
    },
    snippetTextStyle: {
      fontFamily: 'courier',
      color: '#3C3B3B',
      fontSize: '12px'
    }
  }
  return(
    <div style={styles.wrapperStyle}>

      <h1 style={styles.titleStyle}>{props.title}</h1>
      <div style={styles.exampleStyle}>{props.example}</div>
      <p style={styles.bodyStyle}>{props.body}</p>
      <div style={styles.snippetStyle}>
        <p style={styles.snippetTextStyle}>{props.codeSnippet}</p>
      </div>

      <h1 style={styles.titleStyle}>{props.title2}</h1>
      <div style={styles.exampleStyle}>{props.example2}</div>
      <p style={styles.bodyStyle}>{props.body2}</p>
      <div style={styles.snippetStyle}>
        <p style={styles.snippetTextStyle}>{props.codeSnippet2}</p>
      </div>

    </div>
  );
}

export default Item;
