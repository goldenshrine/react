//////////////////////////////// 01 first use of useEffcet
// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);

//   useEffect(function () {
//     console.log("use effect is running..");
//   });

//   return (
//     <div>
//       <h2>{num}</h2>
//       <button
//         onClick={() => {
//           setNum(num + 1); // changes every time when state(num) changes
//         }}
//       >
//         click
//       </button>
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////02 second use of useState

// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);

//   useEffect(function () {
//     console.log("use effect is running..");
//   }, []); //// passing dependencies~(empty array) comp. mounting, use effect ek bar chalega

//   return (
//     <div>
//       <h2>{num}</h2>
//       <button
//         onClick={() => {
//           setNum(num + 1); // changes every time when state(num) changes
//         }}
//       >
//         click
//       </button>
//     </div>
//   );
// };

// export default App;

////////////////////////////03

// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);
//   useEffect(
//     function () {
//       console.log("use effect is running..");
//     },
//     [num] // dependency
//   ); //// passing dependencies~(empty array) comp. mounting, use effect ek bar chalega

//   return (
//     <div>
//       <h2> num1 is {num}</h2>
//       <h2> num2 is {num2}</h2>

//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10); //state toh change horhi lekin
//         }}
//       >
//         hover
//       </button>
//     </div>
//   );
// };

// export default App;

////////////////////////////////04 other example

import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function aChanging() {
    console.log("a ki value change hogyi");
  }
  function bChanging() {
    console.log("b ki value change hogyi");
  }

  useEffect(
    function () {
      bChanging();
      console.log("use effect is running....");
    },
    [a, b]
  );

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>

      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        change a
      </button>

      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        change b
      </button>
    </div>
  );
};

export default App;
