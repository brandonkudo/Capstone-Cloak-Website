import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const styles = {
    wrapperStyle: {
      width: '100vw',
      backgroundColor: '#3C3B3B',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100vw',
      height: '30px',
      alignItems: 'center'
    },
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80vw'
    },
    logoStyle: {
      fontFamily: 'futura',
      color: 'white',
      textDecoration: 'underline',
      textTransform: 'uppercase'
    },
    linkStyle: {
      fontFamily: 'futura',
      color: 'white',
      textDecoration: 'none'
    },
    linkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '300px',
      justifyContent: 'space-between'
    }
  }
  return (
    <div style={styles.wrapperStyle}>

      <div style={styles.containerStyle}>
        <Link to='/' style={styles.logoStyle}>Cloak</Link>

        <div style={styles.linkWrapper}>
          <Link to='/' style={styles.linkStyle}>Home</Link>
          <Link to='/about' style={styles.linkStyle}>About</Link>
          <Link to='/documentation/install' style={styles.linkStyle}>Documentation</Link>
        </div>

      </div>

    </div>
  );
}

export default Header;
