import React from 'react';

function Grid(){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '12px'
    },
    col12: {
      width: '612px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1: {
      width: '50px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1A: {
      width: '40px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1B: {
      width: '40px',
      height: '50px',
      background: '#9B9B9B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1C: {
      width: '40px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1D: {
      width: '40px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1E: {
      width: '40px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1F: {
      width: '40px',
      height: '50px',
      background: '#9B9B9B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1G: {
      width: '40px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1H: {
      width: '40px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1I: {
      width: '40px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1J: {
      width: '40px',
      height: '50px',
      background: '#9B9B9B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1K: {
      width: '40px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col1L: {
      width: '40px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col2: {
      width: '100px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col3: {
      width: '150px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col3A: {
      width: '144px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col3B: {
      width: '144px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col3C: {
      width: '144px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col3D: {
      width: '144px',
      height: '50px',
      background: '#9B9B9B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col4: {
      width: '200px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col4A: {
      width: '196px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col4B: {
      width: '196px',
      height: '50px',
      background: '#9B9B9B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col4C: {
      width: '196px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col5: {
      width: '250px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col6A: {
      width: '300px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col6B: {
      width: '300px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col7: {
      width: '350px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col8: {
      width: '400px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col9: {
      width: '450px',
      height: '50px',
      background: '#D8D8D8',
      color: '#3C3B3B',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col10: {
      width: '500px',
      height: '50px',
      background: '#B2736F',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
    col11: {
      width: '550px',
      height: '50px',
      background: '#3C3B3B',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '3px',
      boxShadow: '1px 1px 1px #828282'
    },
  }
  return(
    <div style={styles.containerStyle}>
      <div style={styles.row}>
        <div style={styles.col12}>
          <p>12</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col1}>
          <p>1</p>
        </div>
        <div style={styles.col11}>
          <p>11</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col2}>
          <p>2</p>
        </div>
        <div style={styles.col10}>
          <p>10</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col3}>
          <p>3</p>
        </div>
        <div style={styles.col9}>
          <p>9</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col4}>
          <p>4</p>
        </div>
        <div style={styles.col8}>
          <p>8</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col5}>
          <p>5</p>
        </div>
        <div style={styles.col7}>
          <p>7</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col6A}>
          <p>6</p>
        </div>
        <div style={styles.col6B}>
          <p>6</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col4A}>
          <p>4</p>
        </div>
        <div style={styles.col4B}>
          <p>4</p>
        </div>
        <div style={styles.col4C}>
          <p>4</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col3A}>
          <p>3</p>
        </div>
        <div style={styles.col3B}>
          <p>3</p>
        </div>
        <div style={styles.col3C}>
          <p>3</p>
        </div>
        <div style={styles.col3D}>
          <p>3</p>
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.col1A}>
          <p>1</p>
        </div>
        <div style={styles.col1B}>
          <p>1</p>
        </div>
        <div style={styles.col1C}>
          <p>1</p>
        </div>
        <div style={styles.col1D}>
          <p>1</p>
        </div>
        <div style={styles.col1E}>
          <p>1</p>
        </div>
        <div style={styles.col1F}>
          <p>1</p>
        </div>
        <div style={styles.col1G}>
          <p>1</p>
        </div>
        <div style={styles.col1H}>
          <p>1</p>
        </div>
        <div style={styles.col1I}>
          <p>1</p>
        </div>
        <div style={styles.col1J}>
          <p>1</p>
        </div>
        <div style={styles.col1K}>
          <p>1</p>
        </div>
        <div style={styles.col1L}>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}

export {Grid};
