// I'm revising 02-components here

import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Variable from "./components/variable";
import Greetings from "./components/greetings";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Card />
      <Variable /> */}

      {/* props practice */}
      <Greetings name="Prince Gupta" age={21} occupation="Student" />
    </div>
  );
};

export default App;
