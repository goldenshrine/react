import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { themeDataContext } from "../context/themeContext";

const Navbar = () => {
  const [theme] = useContext(themeDataContext);
  return (
    <div className={theme}>
      <h2>Prince</h2>

      <Nav2 />
    </div>
  );
};

export default Navbar;
