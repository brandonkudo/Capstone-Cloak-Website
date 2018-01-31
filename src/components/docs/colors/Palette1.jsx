import React from 'react';
import PaletteTemplate from './PaletteTemplate';

function Palette1(){
  const styles = {
    color1: {
      background: '#3C3B3B'
    },
    color2: {
      background: '#9B9B9B'
    },
    color3: {
      background: 'beige'
    },
    color4: {
      background: 'white'
    },
    color5: {
      background: '#B2736F'
    }
  }

  return(
    <div>
      <PaletteTemplate
        paletteName={'Cloak'}
        color1={styles.color1}
        color2={styles.color2}
        color3={styles.color3}
        color4={styles.color4}
        color5={styles.color5}/>
    </div>
  );
}

export {Palette1};
