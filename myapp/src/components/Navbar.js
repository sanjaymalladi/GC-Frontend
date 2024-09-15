import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <nav className="py-12 shadow-md px-36 sticky top-0 z-10">
        <ul className="flex justify-between items-center">
          <div className="flex items-center">
            <li>
              <img
                src={logo}
                alt="welcome"
                className=""
                style={{ width: "100px", height: "auto", borderRadius: "50%" }}
              />
            </li>
            <li className="mx-4 text-xl font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 text-xl font-bold">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="mx-4 text-xl font-bold">
              <Link to="/ambassador">Program</Link>
            </li>
            <li className="mx-4 text-xl font-bold">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="flex items-center">
            <li className="mx-4 text-xl font-bold">
              <Link to="/">Login</Link>
            </li>
            <li className="mx-4 text-xl font-bold bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-md">
              <Link to="/">Sign up</Link>
            </li>

            {/* Theme Switch */}
            <div className="theme-switch-container ml-4">
              <label className="theme-switch" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="theme-switch-input"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <span className="theme-switch-slider"></span>
                <span className="sun-icon">&#9728;</span> {/* Sun icon */}
                <span className="moon-icon">&#9790;</span> {/* Moon icon */}
              </label>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
