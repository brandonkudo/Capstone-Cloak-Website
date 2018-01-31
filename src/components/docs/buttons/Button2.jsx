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
      <style jsx>{`
          button:active {
            animation: clickToShrink 0.2s ease 0s 1;
          }

          @keyframes clickToShrink {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
            }
          }
          `}</style>
    </div>
  );
}

export {Button2};
