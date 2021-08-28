import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState("Basic title");
  const handleClick =()=>{
    if(text==="Basic title")
    setText("Random Title");
    else
    setText("Basic title")
  }
  return <React.Fragment>
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change state</button>
  </React.Fragment>;
};

export default UseStateBasics;
