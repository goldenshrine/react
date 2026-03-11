import React from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  console.log(props.children);
  return (
    <div className="Nav">
      <h2>Prince</h2>
      {/* {props.children[0]}
      {props.children[0]} */}
      {/* props.children */}
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
