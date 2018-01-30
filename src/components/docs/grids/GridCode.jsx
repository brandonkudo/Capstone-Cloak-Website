import React from 'react';

function GridCode(){
  const styles = {
    codeSnippetStyle: {
      backgroundColor: '#D8D8D8',
      padding: '20px',
      marginBottom: '60px',
      border: '1px solid grey',
      width: '612px'
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
        {`<div class="row">
  <div class="col-12"></div>
</div>
<div class="row">
  <div class="col-1"></div>
  <div class="col-11"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-10"></div>
</div>
<div class="row">
  <div class="col-3"></div>
  <div class="col-9"></div>
</div>
<div class="row">
  <div class="col-4"></div>
  <div class="col-8"></div>
</div>
<div class="row">
  <div class="col-5"></div>
  <div class="col-7"></div>
</div>
<div class="row">
  <div class="col-6"></div>
  <div class="col-6"></div>
</div>
<div class="row">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
<div class="row">
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
  <div class="col-3"></div>
</div>
<div class="row">
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
  <div class="col-1"></div>
</div>
`}</pre>
    </div>
  );
}

export {GridCode};
