import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is navbar</h2>
        <h2>this is second Navbar</h2>
      </Navbar>
      {/* //children prperty */}
    </div>
  );
};

export default App;
