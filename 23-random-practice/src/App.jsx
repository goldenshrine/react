///// section 01
//print all the names where age is more than and equal to 80
//(cnfsion) useState ka use iss liye nhi hua kyunki display pe humne koi input liya hi nhi na

import React from "react";

const App = () => {
  const people = [
    {
      name: "Prince",
      surname: "Gupta",
      age: 22,
      city: "Delhi",
    },
    {
      name: "Rahul",
      surname: "Sharma",
      age: 21,
      city: "Mumbai",
    },
    {
      name: "Rohan",
      surname: "Verma",
      age: 23,
      city: "Lucknow",
    },
    {
      name: "Sneha",
      surname: "Singh",
      age: 22,
      city: "Jaipur",
    },
  ];

  const above22 = people.reduce((res, curr) => {
    if (curr.age >= 22) {
      return [...res, curr.name];
    }
    return res;
  }, []);

  return (
    <div>
      <h2>People above 22</h2>
      <ul>
        {above22.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
/// prince

export default App;
