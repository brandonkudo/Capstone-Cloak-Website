import React from 'react';

function Button(){
  const styles = {
    buttonStyle: {
      backgroundColor: '#3C3B3B',
      padding: '8px 17px 8px 17px',
      color: 'white',
      textTransform: 'uppercase'
    }
  }
  return(
    <div>
      <button style={styles.buttonStyle}>Button</button>
    </div>
  );
}

export {Button};
