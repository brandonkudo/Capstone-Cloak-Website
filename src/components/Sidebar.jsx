import React from 'react';
import PropTypes from 'prop-types';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: '#EAE8E8',
      width: '225px',
      height: '575px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll'
    },
    listStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    linkStyle: {
      textDecoration: 'none'
    },
    installStyle: {
      marginTop: '30px'
    }
  };
  return(
    <div style={styles.containerStyle}>
      <p style={styles.installStyle}>Install</p>
      <p>Animations</p>
      <p onClick={props.onSwitchToButtonPage}>Buttons</p>
      <p onClick={props.onSwitchToCardPage}>Cards</p>
      <p>Colors</p>
      <p>Fonts</p>
      <p onClick={props.onSwitchToFormsPage}>Forms</p>
      <p onClick={props.onSwitchToGridPage}>Grid</p>
      <p>Icons</p>
      <p>Mixins</p>
      <p onClick={props.onSwitchToNavPage}>Navbar</p>
      <p onClick={props.onSwitchToSidebarPage}>Sidebar</p>

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
          padding: 8px 0px 8px 15px;
        }

        p:hover {
          cursor: pointer;
          background: #9B9B9B;
          color: white;
        }

      `}</style>

    </div>
  );
}


export default Sidebar;
