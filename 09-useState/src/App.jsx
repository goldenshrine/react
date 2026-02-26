///////////////////////////////////////////////////01 without hook

// import React from "react";

// const App = () => {
//   let a = 20;
//   function changeA() {
//     console.log(a);
//     a = 30;
//     console.log(a);
//   }
//   // this does not show on the screen but just appear on the console window due to not using useState hook

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   );
// };

// export default App;

///////////////////////////////////////////////////02 useState hook

// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [user, setuser] = useState("Prince");

//   function changeNum() {
//     setNum(30);
//     setuser("Monica"); // cut this to run own method
//   }

//   function changeName() {
//     setuser("Monica");
//   }

//   return (
//     <div>
//       <h1>
//         Value of num is {num} <br /> val of user is {user} // cut after br to run own method
//       </h1>
//       {/* <h2>Value of user is {user} </h2> // uncomment this to run own method */}
//       <button onClick={changeNum}>Click</button>
//       {/* <button onClick={changeName}>Click</button> // uncomment this to run own method */}
//     </div>
//   );
// };

// export default App;

//////////////////////02.1 useState hook using array

// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [user, setuser] = useState("Prince");
//   const [users, setusers] = useState([10, 20, 30]);

//   function changeNum() {
//     setNum(30);
//     setuser("Monica");
//     setusers([20, 30, 50]);
//   }

//   return (
//     <div>
//       <h1>
//         Value of num is {num} <br />
//         {users}
//         <br /> val of user is {user}
//       </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   );
// };

// export default App;

///////////////////////////////////////////////////03 useState hook- counter (micro project)
import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increase() {
    setnum(num + 1);
  }
  function dicrease() {
    setnum(num - 1);
  }
  function jupm5() {
    setnum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={dicrease}>decrease</button>
      <button onClick={jupm5}>Jump by 5</button>
    </div>
  );
};

export default App;
