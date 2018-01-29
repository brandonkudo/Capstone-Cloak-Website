import React from 'react';

function Card(){
  const styles = {
    cardStyle: {
      height: '200px',
      width: '150px',
      boxShadow: '1px 1px 1px #828282',
      borderRadius: '3px'
    },
    cardHead: {
      width: '100%',
      height: '50%',
      backgroundColor: 'peachpuff',
      borderTopLeftRadius: '3px',
      borderTopRightRadius: '3px'
    },
    cardBody: {
      width: '100%',
      height: '50%',
      padding: '5px'
    }
  }

  return(
    <div style={styles.cardStyle}>
      <div style={styles.cardHead}>
      </div>
      <div style={styles.cardBody}>
        <p>Card</p>
      </div>
    </div>
  );
}

export default Card;
