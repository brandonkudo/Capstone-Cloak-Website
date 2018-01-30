import React from 'react';
import PaletteTemplate from './PaletteTemplate';

function Palette1(){
  const styles = {
    color1: {
      background: '#B2736F'
    },
    color2: {
      background: '#3C3B3B'
    },
    color3: {
      background: 'white'
    },
    color4: {
      background: '#9B9B9B'
    },
    color5: {
      background: 'beige'
    }
  }

  return(
    <div>
      <PaletteTemplate
        color1={styles.color1}
        color2={styles.color2}
        color3={styles.color3}
        color4={styles.color4}
        color5={styles.color5}/>
    </div>
  );
}

export {Palette1};
