import React from 'react';

function Card2(){
  const styles = {
    width: '300px',
    height: '100px',
    border: '2px solid #3C3B3B',
    display: 'flex',
    flexDirection: 'column',
    headerStyle: {
      backgroundColor: '#3C3B3B',
      color: 'white',
      width: '100%',
      height: '30px',
      padding: '5px',
      fontSize: '12px',
      textTransform: 'uppercase'
    },
    bodyStyle: {
      color: '#3C3B3B',
      width: '100%',
      padding: '5px',
      fontSize: '12px'
    }
  }
  return(
    <div style={styles}>
      <div style={styles.headerStyle}>
        <p>Card Header</p>
      </div>
      <div style={styles.bodyStyle}>
        <p>Card Body</p>
      </div>
    </div>
  );
}

export default Card2;
