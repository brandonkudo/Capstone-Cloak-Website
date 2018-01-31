import React from 'react';
import { Link } from 'react-router-dom';

function Splash(){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '90vh'
    },
    textStyle: {
      fontFamily: 'futura',
      fontWeight: '100',
      fontSize: '80px',
      textTransform: 'uppercase',
      textDecoration: 'underline',
      letterSpacing: '20px',
      color: '#3C3B3B',
      marginBottom: '20px'
    }
  };
  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.textStyle}>Cloak</h1>
      <Link to='/documentation' style={styles.buttonStyle} className='launch'>Get Started</Link>
      <style jsx global>{`

          .launch {
            background-color: #3C3B3B;
            padding: 10px 20px 10px 20px;
            color: white;
            text-transform: uppercase;
            border: none;
            text-decoration: none;
            font-size: 10px;
            border: 2px solid #3C3B3B;
          }

          .launch:hover {
            background-color: white;
            border: 2px solid #3C3B3B;
            color: #3C3B3B;
          }

          .launch:active {
            animation: clickShrink 0.2s ease 0s 1;
          }

          @keyframes clickShrink {
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

export default Splash;
