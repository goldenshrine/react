// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState(10);

//   const btnClicked = () => {
//     ////////////////// 1st asynchronous nature of setnum
//     // setnum(num + 1);
//     //pehle value change hogi and then print hoga - current value se 1 previos value hi show karegi due to asynchronous nature of setnum (javascript-asynchronous & synchronous nature)
//     console.log(num);

//     //////////////2nd react re-render
//     setnum(num);  // yaha react, re-render nahi karega o/p same hi rahega
//   };
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click!</button>
//     </div>
//   );
// };

// export default App;

///////////////////////////////02 object

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({ user: "Prince", age: 20 });

//   const btnClicked = () => {
//     console.log(num);
//     console.log(num.user);
//     console.log(num.age);
//   };

//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>click!</button>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////03destructuring
/////not understood properly RA
// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({ user: "Prince", age: 20 });

//   const btnClicked = () => {
//     const newNum = { ...num };
//     console.log(newNum);
//     newNum.user = "Aman";
//     newNum.age = 21;
//     setnum(newNum);
//   };

//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>click!</button>
//     </div>
//   );
// };

// export default App;

///////////////////////////////////////////04 array

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState([10, 20, 30]);

//   const btnClicked = () => {
//     const newNum = [...num];
//     newNum.push(99);
//     console.log(newNum);
//     setnum(newNum);
//   };

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click!</button>
//     </div>
//   );
// };

// export default App;

////////////////////////////////////////// Preview
// previos value same rahe new value change ho jaye

import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState({ user: "prince", age: 17 });

  const btnClicked = () => {
    setnum((prev) => ({ ...prev, age: 50 }));
  };

  return (
    <div>
      <h1>
        {num.user},{num.age}
      </h1>
      <button onClick={btnClicked}>click!</button>
    </div>
  );
};

export default App;
