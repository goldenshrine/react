//local storage - storage in web site memory its permanent until deletd
//session storage - storage during a session
import React from "react";

const App = () => {
  // localStorage.clear() // it deletes the  local storage
  // sessionStorage.clear() // it deletes the session  storage

  localStorage.setItem("user", "sarthak");
  localStorage.setItem("user2", "prince"); // Create or set(create) element in local storage
  localStorage.removeItem("user1", "prince"); // Remove or dlt element in local storage

  const user2 = localStorage.getItem("user2");
  console.log(user2);
  return <div>apple</div>;
};

export default App;
