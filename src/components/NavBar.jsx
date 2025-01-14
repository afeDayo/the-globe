import React from "react";
import { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const NavBar = () => {
  // Defines the state "darkMode"  to manage dark mode, initializing from localStorage or defaulting to false incase of errors
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  // Applying appropriate class to the body based on darkMode State
  if (darkMode) {
    //Remove lightmode class if darkmode is enabled
    document.body.classList.remove("light-mode");
  } else {
    // Add lightmode class if darkmode is disabled
    document.body.classList.add("light-mode");
  }

  const icons = darkMode ? <BsMoonFill /> : <BsMoon />;

  return (
    <nav className="d-flex justify-content-between align-items-center p-5 shadow bg-elements custom-text-color">
      <h3 className="mb-0">Where in the world?</h3>

      <div
        onClick={() => {
          // toggle the light-mode class on the body
          document.body.classList.toggle("light-mode");
          // Update the darkmode state with the opposite of what was in the darkmode previously
          setDarkMode(!darkMode);

          // update the localestorage with current mode either light or dark
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center gap-2"
      >
        {icons}
        <p className="mb-0">{darkMode ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </nav>
  );
};

export default NavBar;
