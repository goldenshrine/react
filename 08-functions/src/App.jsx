//////////////////////////////01 function with button and mouse events
import React from "react";

const App = () => {
  function btnClicked() {
    console.log("button is clicked");
  }

  function mouseEnter() {
    console.log("mouse entered");
  }
  return (
    <div>
      <h1>hello, Prince</h1>

      <button onClick={btnClicked}>Single click</button>

      <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>
        {/* mouse entered only on this  */}
        Double click
      </button>

      <button
        onMouseLeave={() => {
          // 2nd method, yaha pe function alag se nahi banana pada directly created and used arrow function here.
          console.log("mouse left");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;

////////////////////////////////////
