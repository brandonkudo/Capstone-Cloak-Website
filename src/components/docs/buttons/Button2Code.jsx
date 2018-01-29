import React from 'react';

function Button2Code(){
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
      <pre style={styles.snippetTextStyle}>{`<button class="btn-gradient">Button</button>`}</pre>
    </div>
  );
}

export default Button2Code;
