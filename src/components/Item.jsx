import React from 'react';

function Item(props){
  const styles = {
    wrapperStyle: {
      padding: '25px'
    },
    titleStyle: {
      textTransform: 'uppercase',
      marginBottom: '10px'
    },
    exampleStyle: {
      marginBottom: '10px'
    },
    bodyStyle: {
      marginBottom: '10px'
    },
    snippetStyle: {
      backgroundColor: '#D8D8D8',
      padding: '5px',
      marginBottom: '10px'
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
    </div>
  );
}

export default Item;
