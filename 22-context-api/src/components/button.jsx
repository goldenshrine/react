import React, { useContext } from "react";
import { themeDataContext } from "../context/themeContext";

const Button = () => {
  const [theme, setTheme] = useContext(themeDataContext);
  const changeTheme = () => {
    setTheme("dark");
  };
  return (
    <div>
      <button onClick={changeTheme}>Change Theme {theme}</button>
    </div>
  );
};

export default Button;
