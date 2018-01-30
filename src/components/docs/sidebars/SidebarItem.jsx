import React from 'react';

function SidebarItem(){
  const styles = {
    containerStyle: {
      width: '125px',
      backgroundColor: '#EAE8E8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0 20px 0'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <a>Link</a>
      <a>Link</a>
      <a>Link</a>
      <a>Link</a>
      <a>Link</a>
      <a>Link</a>

      <style jsx>{`
        a {
          padding: 5px 10px 5px 10px;
          width: 100%;
          text-decoration: none;
          color: #3C3B3B;
          text-align: center;
          text-transform: uppercase;
        }

        a:hover {
          background: #9B9B9B;
          color: white;
          cursor: pointer;
        }
      `}</style>

    </div>
  );
}

export {SidebarItem};
