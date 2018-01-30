import React from 'react';

function CardCode(){
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
        {`<div class="card-img">
  <div class="card-img-head">
  </div>
  <div class="card-img-body">
  </div>
</div>`}</pre>
    </div>
  );
}

export {CardCode};
