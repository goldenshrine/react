// I'm revising 02-components and cgpt task practice here

// section 01
// import React from "react";
// import Card from "./components/card";
// import Navbar from "./components/navbar";
// import Variable from "./components/variable";
// import Greetings from "./components/greetings";

// const App = () => {
//   return (
//     <div>
//       {/* <Navbar />
//       <Card />
//       <Variable /> */}

//       {/* props practice */}
//       <Greetings name="Prince Gupta" age={21} occupation="Student" />
//     </div>
//   );
// };

// export default App;

//section 02

// ✅ Task 1: Counter App

// Create:

// Button ➕ → increase count
// Button ➖ → decrease count
// Button 🔄 → reset to 0

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div className="count">{count}</div>
//       <div className="btns">
//         <button onClick={() => setCount(count + 1)}>increase</button>
//         <button onClick={() => setCount(count - 1)}>dicrease</button>
//         <button onClick={() => setCount(0)}>reset</button>
//       </div>
//     </div>
//   );
// };

// export default App;

//section 03

// //✅ Task 2: Toggle Text
// Show: "Hello" / "Goodbye"
// Button toggles text

// import React, { useState } from "react";

// const App = () => {
//   const [toggle, setToggle] = useState("hello");
//   return (
//     <div>
//       <h2>{toggle}</h2>
//       <button
//         onClick={() => {
//           if (toggle === "hello") {
//             setToggle("bye");
//           } else {
//             setToggle("hello");
//           }
//         }}
//       >
//         Toggle text
//       </button>
//     </div>
//   );
// };

// export default App; // // okay...doing it but not fully confident  and please explain the toggle i dont understand completely

// section 03

// ✅ Task 3: Dynamic Name
// Input field
// Show typed name live

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        placeholder="please enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear</button>

      <h3>{name}</h3>
    </div>
  );
};

export default App;
