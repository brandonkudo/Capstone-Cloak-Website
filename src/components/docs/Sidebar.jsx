import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: '#EAE8E8',
      width: '200px',
      padding: '15px'
    },
    listStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    linkStyle: {
      textDecoration: 'none'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <div style={styles.listStyle}>
        <Link to='/documentation/install' style={styles.linkStyle}>Install</Link>
        <Link to='/documentation/animations' style={styles.linkStyle}>Animations</Link>
        <Link to='/documentation/buttons' style={styles.linkStyle}>Buttons</Link>
        <Link to='/documentation/cards' style={styles.linkStyle}>Cards</Link>
        <Link to='/documentation/colors' style={styles.linkStyle}>Colors</Link>
        <Link to='/documentation/fonts' style={styles.linkStyle}>Fonts</Link>
        <Link to='/documentation/forms' style={styles.linkStyle}>Forms</Link>
        <Link to='/documentation/grid' style={styles.linkStyle}>Grid</Link>
        <Link to='/documenation/icons' style={styles.linkStyle}>Icons</Link>
        <Link to='/documentation/mixins' style={styles.linkStyle}>Mixins</Link>
        <Link to='/documentation/navbar' style={styles.linkStyle}>Navbar</Link>
        <Link to='/documentation/sidebar' style={styles.linkStyle}>Sidebar</Link>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: futura;
          text-transform: uppercase;
          color: #3C3B3B;
          font-size: 20px;
          text-decoration: none;
        }

      `}</style>

    </div>
  );
}


export default Sidebar;
