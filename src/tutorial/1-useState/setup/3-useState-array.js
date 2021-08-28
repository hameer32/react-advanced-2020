import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
