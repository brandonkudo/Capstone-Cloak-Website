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
      height: '40px',
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
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Header;
