// //////////////////////////////01 function with button and mouse events
// import React from "react";

// const App = () => {
//   function btnClicked() {
//     console.log("button is clicked");
//   }

//   function mouseEnter() {
//     console.log("mouse entered");
//   }
//   return (
//     <div>
//       <h1>hello, Prince</h1>

//       <button onClick={btnClicked}>Single click</button>

//       <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>
//         {/* mouse entered only on this  */}
//         Double click
//       </button>

//       <button
//         onMouseLeave={() => {
//           // 2nd method, yaha pe function alag se nahi banana pada directly created and used arrow function here.
//           console.log("mouse left");
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// };

// export default App;

// ////////////////////////////////////02 function with button Event again

// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <button onClick={() => {
//           console.log("button clicked");
//         }}
//       >Click here</button>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////03 function with onChange event

// import React from "react";

// const App = () => {
//   function inputChanging() {
//     console.log("user is typing");
//   }

//   return (
//     <div>
//       <input onChange={inputChanging} type="text" placeholder="enter name" />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////04 function with onChange event with parameters

// import React from "react";

// const App = () => {
//   function inputChanging(elem) {
//     console.log(elem.target.value);
//   }

//   return (
//     <div>
//       <input onChange={inputChanging} type="text" placeholder="enter name" />
//     </div>
//   );
// };

// export default App;

////////////////////////////////////05 Calling functions

/////RA not understood anything
import React from "react";

const App = () => {
  function inputChanging(val) {
    console.log(val);
  }

  return (
    <div>
      <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="enter name"
      />
    </div>
  );
};

export default App;
