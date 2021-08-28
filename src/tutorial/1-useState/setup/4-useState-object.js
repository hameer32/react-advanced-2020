import React, { useState } from "react";

const UseStateObject = () => {
  const [person, serPerson] = useState({
    name: "Hameer",
    age: 25,
    message: "Hello World",
  });
  const handleClick = () => {
    serPerson({ ...person, message: "Welcome to india" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleClick}>
        Change Mesage
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
