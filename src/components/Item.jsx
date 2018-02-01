import React from 'react';

function Item(props){
  const styles = {
    wrapperStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    titleStyle: {
      textTransform: 'uppercase',
      marginBottom: '30px'
    },
    exampleStyle: {
      marginBottom: '30px'
    },
    bodyStyle: {
      marginBottom: '30px'
    },
    snippetStyle: {
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
  };
  return(
    <div style={styles.wrapperStyle} className='wrapper'>
      <h1 style={styles.titleStyle}>{props.title}</h1>
      <div style={styles.exampleStyle}>{props.example}</div>
      <p style={styles.bodyStyle}>{props.body}</p>
      <div>{props.codeSnippet}</div>

      <h1 style={styles.titleStyle}>{props.title2}</h1>
      <div style={styles.exampleStyle}>{props.example2}</div>
      <p style={styles.bodyStyle}>{props.body2}</p>
      <div>{props.codeSnippet2}</div>

      <style jsx global>{`
          @media screen and (max-width: 1025px) {
            .wrapper {
              width: 800px;
              height: 575px;
              overflow: scroll;
              padding: 25px 0 0 25px;
            }
          }

          @media screen and (min-width: 1026px) {
            .wrapper {
              width: 800px;
              padding: 50px 0 0 50px;
              overflow: visible;
            }
          }


    `}</style>

    </div>

  );
}

export default Item;
