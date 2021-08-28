import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setValue((previousState) => {
        return previousState + 1;
      });
    }, 1000);
  };
  return (
    <React.Fragment>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default UseStateCounter;
