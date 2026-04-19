import React from "react";

const variable = () => {
  const luck = "good luck";
  const age = 565; // to utilize a variable u have to put the variable inside curly braces
  return (
    <div className="var">
      <h4>{luck}</h4>
      <h4>{age}</h4>
    </div>
  );
};

export default variable;
