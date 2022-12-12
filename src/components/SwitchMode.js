import React, { useState, useEffect } from "react";

import "./SwitchMode.css";

export default function SwitchMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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
