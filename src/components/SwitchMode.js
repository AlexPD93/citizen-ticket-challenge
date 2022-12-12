import React, { useEffect } from "react";

import "./SwitchMode.css";

export default function SwitchMode({ theme, setTheme }) {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="toggle-button-container">
      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" ? "Dark theme" : "Light theme"}
      </button>
    </div>
  );
}
