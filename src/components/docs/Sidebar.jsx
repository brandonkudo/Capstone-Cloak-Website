import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: '#EAE8E8',
      width: '15vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      padding: '15px'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <Link to='/documentation/install'>Install</Link>
      <p>Animations</p>
      <Link to='/documentation/buttons'>Buttons</Link>
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
        }

        p {
          font-family: futura;
          text-transform: uppercase;
          margin-bottom: 10px;
          color: #3C3B3B;
          font-size: 20px;
        }
      `}</style>

    </div>
  );
}


export default Sidebar;
