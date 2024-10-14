import React, { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const Welcome = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`text-6xl text-bold ${
        theme === "light"
          ? "text-gray-800  bg-slate-200"
          : "text-slate-200 bg-gray-800"
      } `}
    >
      Welcome to Theme Changing App
    </div>
  );
};

export default Welcome;
