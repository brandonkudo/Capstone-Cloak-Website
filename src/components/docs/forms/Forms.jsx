import React from 'react';

function Forms(){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputStyle: {
      width: '400px',
      border: '3px solid #3C3B3B',
      padding: '3px',
      marginBottom: '20px',
      color: '#3C3B3B'
    }
  }
  return(
    <div style={styles.containerStyle}>
      <input style={styles.inputStyle} placeholder="Input"/>
      <textarea style={styles.inputStyle} placeholder="Text Area"/>
      <div className='container'>
        <input type="checkbox"/>
        <span className='checkmark'></span>
      </div>

      <style jsx>{`

          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 30px;
            width: 30px;
            background-color: #eee;
          }

          .container:hover input ~ .checkmark {
            background-color: #ccc;
          }

          .container input:checked ~ .checkmark {
            background-color: #2196F3;
          }

          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          .container input:checked ~ .checkmark:after {
            display: block;
          }

          .container .checkmark:after {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }


          `}</style>

      </div>
    );
  }

  export default Forms;
