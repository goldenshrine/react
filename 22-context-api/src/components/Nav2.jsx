import React, { useContext } from "react";
import { themeDataContext } from "../context/themeContext";

const Nav2 = () => {
  const [theme, setTheme] = useContext(themeDataContext);

  return (
    <div className="Nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Servises</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Nav2;
