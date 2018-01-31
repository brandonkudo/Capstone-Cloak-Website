import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const styles = {
    wrapperStyle: {
      width: '100vw',
      background: '#3C3B3B',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '40px',
      alignItems: 'center'
    },
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '12px'
    },
    linkWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '300px',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%'
    }
  };
  return (
    <div style={styles.wrapperStyle}>

      <div style={styles.containerStyle}>
        <Link to='/' style={styles.logoStyle} className='logo'>Cloak</Link>

        <div style={styles.linkWrapper}>
          <Link to='/' style={styles.linkStyle} className='link'>Home</Link>
          <Link to='/about' style={styles.linkStyle} className='link'>About</Link>
          <Link to='/documentation' style={styles.linkStyle} className='link'>Documentation</Link>
        </div>

      </div>

      <style jsx global>{`
        .logo {
          animation: clickShrink 0.2s ease 0s 1;
        }

        .link {
          color: white;
          padding: 12px;
        }

        .link:hover {
          background: white;
          color: #3C3B3B;
        }
      `}</style>
    </div>
  );
}

export default Header;
