import React from 'react';
import Sidebar from './Sidebar';
import Install from './Install';

function Documentation() {
  const styles = {
    wrapperStyle: {
      displayFlex: 'flex',
      flexDirection: 'row',
      width: '100vw'
    }
  }
  return(
    <div style={styles.wrapperStyle}>
      <Sidebar />
      <Install />
    </div>
  );
}

export default Documentation;
