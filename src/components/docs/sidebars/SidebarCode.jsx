import React from 'react';

function SidebarCode(){
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
        {`<div class="sidebar-left">
  <a href="#" class="sidebar-link>Link</a>
  <a href="#" class="sidebar-link>Link</a>
  <a href="#" class="sidebar-link>Link</a>
  <a href="#" class="sidebar-link>Link</a>
  <a href="#" class="sidebar-link>Link</a>
  <a href="#" class="sidebar-link>Link</a>
</div>`}</pre>
    </div>
  );
}

export {SidebarCode};
