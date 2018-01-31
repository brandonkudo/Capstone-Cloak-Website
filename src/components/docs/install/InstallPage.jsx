import React from 'react';

function InstallPage(){
  const styles = {
    containerStyle: {
      lineHeight: '30px'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <p>In order to use this library simply download the following repository:</p>
      <a href="#">https://github.com/brandonkudo</a>
      <p>Then import it into the head of your HTML document like so:</p>
    </div>
  );
}

export {InstallPage};
