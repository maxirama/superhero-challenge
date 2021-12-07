import React from "react";

const Character = ({ name, powerStats, img }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={img} alt={`${name} card`} />
      <div>
        {powerStats.map((stat) => {
          const [key, value] = stat;
          return <div>{`${key.toUpperCase()} : ${value}`}</div>;
        })}
      </div>
    </div>
  );
};

export default Character;
