import React from 'react';

function About(){
  const styles = {
    wrapperStyle: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center'
    },
    containerStyle: {
      width: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    headerStyle: {
      fontSize: '50px',
      textTransform: 'uppercase',
      fontWeight: '100',
      padding: '30px'
    },
    bodyStyle: {
      fontSize: '16px'
    }
  };
  return (
    <div style={styles.wrapperStyle}>
      <div style={styles.containerStyle}>
        <h1 style={styles.headerStyle}>About Us</h1>
        <p style={styles.bodyStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus odio orci, at tristique augue aliquet id. Aliquam egestas ornare elit, sed lacinia ipsum tempus non. Aliquam erat volutpat. Nunc facilisis nulla arcu, id eleifend erat sollicitudin ut. Cras eget turpis euismod, ullamcorper felis sed, consectetur dui. Nunc fringilla tortor velit, vitae rhoncus leo fermentum ac. Aliquam fermentum dapibus elit, vestibulum placerat ante suscipit quis. In semper lectus eu nunc tincidunt auctor. Morbi pellentesque lectus vel elit dapibus mattis. Proin sagittis est dolor, eget hendrerit mauris consectetur ultrices. Mauris diam orci, placerat tristique urna sed, egestas convallis turpis. Quisque sollicitudin porttitor pellentesque. Praesent imperdiet sem eget feugiat euismod. Donec bibendum hendrerit magna vel tincidunt. Nunc cursus luctus est, ut dignissim erat accumsan nec. Sed ut ante dui.
        </p>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: futura;
          color: #3C3B3B;
        }
      `}</style>
    </div>
  );
}

export default About;
