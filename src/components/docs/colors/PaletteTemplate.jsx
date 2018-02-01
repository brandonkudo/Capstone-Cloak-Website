import React from 'react';
import PropTypes from 'prop-types';

function PaletteTemplate(props){

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '1px 1px 1px #828282',
    width: '375px',
    borderRadius: '3px',
    nameStyle: {
      marginBottom: '10px',
      fontSize: '16px'
    }
  }

  return(
    <div>
      <p style={styles.nameStyle}>{props.paletteName}</p>
      <div style={styles}>
        <div style={props.color1} className='box1 box'></div>
        <div style={props.color2} className='box'></div>
        <div style={props.color3} className='box'></div>
        <div style={props.color4} className='box'></div>
        <div style={props.color5} className='box5 box'></div>

        <style jsx>{`

          .box {
            height: 100px;
            width: 75px;
          }

          .box1 {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }

          .box5 {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
        `}</style>
      </div>
    </div>
  );
}

PaletteTemplate.propTypes = {
  paletteName: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  color4: PropTypes.string,
  color5: PropTypes.string
}

export default PaletteTemplate;
