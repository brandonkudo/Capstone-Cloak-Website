import React from 'react';

function Button2(){
  const styles = {
    buttonStyle: {
      background: 'linear-gradient(to bottom, #6E6E6E, #3C3B3B)',
      padding: '8px 17px 8px 17px',
      color: 'white',
      textTransform: 'uppercase',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282',
      border: 'none'
    }
  }
  return(
    <div>
      <button style={styles.buttonStyle}>Button</button>
    </div>
  );
}

export {Button2};
