import React from 'react';

function Item(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <div>{props.example}</div>
      <p>{props.body}</p>
      <div>{props.codeSnippet}</div>
    </div>
  );
}

export default Item;
