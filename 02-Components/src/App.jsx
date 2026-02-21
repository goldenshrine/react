/*import React from "react";
import { age } from "./components/card";
import user from "./components/card";

const App = () => {
  const user = "prince"; // inko hataoge toh imported wale chalenge
  const age = 87; //
  return (
    // <div>
    //   <div className="card">
    //     <h2>Croatia</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
    //       voluptates.
    //     </p>
    //   </div>

    // </div>
    <>
      <h1>Hello , I'm {user} </h1>
      <h2>and my age is {age} </h2>
    </>
  );
};

export default App;

from 1:06:28 to 1:17:28 */

// from 1:17:28 to 1:26:02

import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
