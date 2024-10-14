import React, { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const ThemeToggle = () => {
  const { theme , toggleTheme} = useContext(ThemeContext);

  return (
    <button className={`m-3 border-gray-950 p-2 text-xl rounded ${theme === 'light' ? "bg-slate-200 text-gray-800" : "text-slate-200 bg-gray-800"} `} onClick={toggleTheme}>
      Change Theme to {/* (theme === 'light' && "dark") || (theme === 'dark' && "light") */} {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggle;
