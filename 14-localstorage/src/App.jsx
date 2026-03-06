///////////////////////////////// 01 local storage
// //local storage - storage in web site memory its permanent until deletd
// //session storage - storage during a session
// //4 method only .setItem(), .getItem(), removeItem(), .clear()
// import React from "react";

// const App = () => {
//   // localStorage.clear() // it deletes the  local storage
//   // sessionStorage.clear() // it deletes the session  storage

//   localStorage.setItem("user", "sarthak");
//   localStorage.setItem("user2", "prince"); // Create or set(create) element in local storage
//   localStorage.removeItem("user1", "prince"); // Remove or dlt element in local storage
//   localStorage.setItem("age", "23");
//   const user2 = localStorage.getItem("user2");
//   const age = localStorage.getItem("age");

//   console.log(user2, age);
//   return <div>apple</div>;
// };

// export default App;

///////////////////////////////// 02 object saving

// import React from "react";

// const App = () => {
//   const user = {
//     username: "sarthak",
//     age: 18,
//     city: "bhopal",
//   };

//   localStorage.setItem("user", JSON.stringify(user)); // converts obj to string

//   console.log(user); // user is a string
//   return <div>apple</div>;
// };

// export default App;

///////////////////////////////// 03 saving as object

import React from "react";

const App = () => {
  // const user = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user")); //converts to objects

  console.log(user); // user is a string

  return <div>apple</div>;
};

export default App;
