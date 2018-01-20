import React from 'react';
import PropTypes from 'prop-types';
import picture from '../assets/images/ComponentStructure.png';

function Sidebar(props){
  const styles = {
    containerStyle: {
      backgroundColor: 'grey',
      width: '20vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <p>Install</p>
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
  );
}


export default Sidebar;
