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
        <p onClick={props.onSwitchPage}>Install</p>
        <p>Animations</p>
        <p>Buttons</p>
        <p>Cards</p>
        <p>Colors</p>
        <p>Fonts</p>
        <p>Forms</p>
        <p>Grid</p>
        <p>Icons</p>
        <p>Mixins</p>
        <p>Navbar</p>
        <p>Sidebar</p>
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
