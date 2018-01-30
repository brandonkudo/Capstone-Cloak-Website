import React from 'react';

function Navbar(){
  const styles = {
    wrapperStyle: {
      width: '100%',
      background: 'linear-gradient(to bottom, #6E6E6E, #3C3B3B)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '40px',
      alignItems: 'center',
      borderRadius: '3px'
    },
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '500px'
    },
    logoStyle: {
      fontFamily: 'futura',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '5px'
    },
    linkStyle: {
      fontFamily: 'futura',
      color: 'white',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '12px',
    },
    linkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '150px',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  };
  return(
    <div style={styles.wrapperStyle}>

      <div style={styles.containerStyle}>
        <p style={styles.logoStyle}>Logo</p>

        <div style={styles.linkWrapper}>
          <p style={styles.linkStyle}>Link</p>
          <p style={styles.linkStyle}>Link</p>
          <p style={styles.linkStyle}>Link</p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
