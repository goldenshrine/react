////////////////////////////01 Theme context

// import React, { createContext } from "react";

// export const themeDataContext = createContext();

// const themeContext = (props) => {
//   return (
//     <div>
//       <themeDataContext.Provider value={"chotabihari"}>
//         {props.children}
//       </themeDataContext.Provider>
//     </div>
//   );
// };

// export default themeContext;

////////////////////////////02 Theme context
import React, { createContext } from "react";
import { useState } from "react";

export const themeDataContext = createContext();

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <themeDataContext.Provider value={[theme, setTheme]}>
      {props.children}
    </themeDataContext.Provider>
  );
};

export default ThemeContext;
