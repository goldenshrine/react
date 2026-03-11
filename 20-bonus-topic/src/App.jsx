import React from "react";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>Theme is {theme}</h1>
    </div>
  );
};

export default App;
