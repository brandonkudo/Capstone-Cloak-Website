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
    }
  }
  return(
    <div style={styles.containerStyle}>
      <div style={styles.listStyle}>
        <Link to='/documentation/install'>Install</Link>
        <Link to='/documentation/animations'>Animations</Link>
        <Link to='/documentation/buttons'>Buttons</Link>
        <Link to='/documentation/cards'>Cards</Link>
        <Link to='/documentation/colors'>Colors</Link>
        <Link to='/documentation/fonts'>Fonts</Link>
        <Link to='/documentation/forms'>Forms</Link>
        <Link to='/documentation/grid'>Grid</Link>
        <Link to='/documenation/icons'>Icons</Link>
        <Link to='/documentation/mixins'>Mixins</Link>
        <Link to='/documentation/navbar'>Navbar</Link>
        <Link to='/documentation/sidebar'>Sidebar</Link>
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
