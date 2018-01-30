import React from 'react';

function NavbarCode(){
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
        {`<div class="nav">
  <div class="nav-logo">
    <p>Logo</p>
  </div>
  <div class="nav-group">
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </div>
</div>`}</pre>
    </div>
  );
}

export {NavbarCode};
