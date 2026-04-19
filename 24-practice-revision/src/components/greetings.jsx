import React from "react";

const Greetings = (props) => {
  return (
    <div className="greet">
      <h1>Hello, my name is {props.name} </h1>
      <p>
        and I am {props.age} years old and I am a {props.occupation}
      </p>
    </div>
  );
};

export default Greetings;

// import React from "react";

// const Greetings = ({ name, age, occupation }) => {
//   // drestructuring example, commonly used and better approach
//   return (
//     <div className="greet">
//       <h1>Hello, my name is {name} </h1>
//       <p>
//         and I am {age} years old and I am a {occupation}
//       </p>
//     </div>
//   );
// };

// export default Greetings;
