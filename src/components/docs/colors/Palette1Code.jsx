import React from 'react';

function Palette1Code(){
  const styles = {
    codeSnippetStyle: {
      backgroundColor: '#D8D8D8',
      padding: '10px',
      marginBottom: '60px',
      border: '1px solid grey'
    },
    snippetTextStyle: {
      fontFamily: 'courier',
      color: '#3C3B3B',
      fontSize: '12px'
    }
  }

  return(
    <div style={styles.codeSnippetStyle}>
      <pre style={styles.snippetTextStyle}>
        {`<div class="bg-cloak-dark"></div>
<div class="bg-cloak-gray"></div>
<div class="bg-cloak-light"></div>
<div class="bg-cloak-white"></div>
<div class="bg-cloak-main"></div>`}</pre>
    </div>
  );
}

export {Palette1Code};
