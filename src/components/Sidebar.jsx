import React from 'react';
import PropTypes from 'prop-types';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: '#EAE8E8',
      width: '200px',
      display: 'flex',
      flexDirection: 'column'
    },
    listStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    linkStyle: {
      textDecoration: 'none'
    }
  };
  return(
    <div style={styles.containerStyle}>
      <p>Install</p>
      <p>Animations</p>
      <p onClick={props.onSwitchToButtonPage}>Buttons</p>
      <p>Cards</p>
      <p>Colors</p>
      <p>Fonts</p>
      <p>Forms</p>
      <p>Grid</p>
      <p>Icons</p>
      <p>Mixins</p>
      <p>Navbar</p>
      <p>Sidebar</p>

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

        p {
          width: 100%;
          padding-left: 15px;
        }

        p:hover {
          cursor: pointer;
          background-color: #9B9B9B;
          color: white;
        }

      `}</style>

    </div>
  );
}


export default Sidebar;
