import React from 'react';

function Colors() {
  const styles = {
    wrapperStyle: {
    }
  }
  return(
    <div style={styles.wrapperStyle}>
      <h1>Colors</h1>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

      `}</style>
    </div>
  );
}

export default Colors;
