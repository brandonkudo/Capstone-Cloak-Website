import React from 'react';
import PropTypes from 'prop-types';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: '#EAE8E8',
      display: 'flex',
      flexDirection: 'column'
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
      <p
        onClick={props.switchPage}
        style={styles.installStyle}>Install</p>
      <p onClick={props.onSwitchToAnimationsPage}>Animations</p>
      <p onClick={props.onSwitchToButtonPage}>Buttons</p>
      <p onClick={props.onSwitchToCardPage}>Cards</p>
      <p onClick={props.onSwitchToColorsPage}>Colors</p>
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

        @media screen and (max-width: 1025px){
          div {
            width: 225px;
            height: 575px;
            overflow: scroll;
          }
        }

        @media screen and (min-width: 1026px) {
          div {
            width: 250px;
            height: 1725px;
            overflow: visible;
          }
        }

      `}</style>

    </div>
  );
}


export default Sidebar;
