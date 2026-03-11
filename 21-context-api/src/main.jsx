import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./context/themeContext";

createRoot(document.getElementById("root")).render(<App />);
