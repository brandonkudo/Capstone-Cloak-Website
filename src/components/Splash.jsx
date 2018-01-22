import React from 'react';


function Splash(){
  const styles = {
    containerStyle: {
      display: 'flex',
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
      color: '#3C3B3B'
    }
  }
  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.textStyle}>Cloak</h1>
      <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
      `}</style>
    </div>
  );
}

export default Splash;
