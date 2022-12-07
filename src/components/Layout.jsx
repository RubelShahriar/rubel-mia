import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const [theme, setTheme] = useState(false);
  const [themify, setThemify] = useState(
    localStorage.getItem("themeItem") || "dark-theme"
  );

  const toggleTheme = (e) => {
    if (themify === "dark-theme") {
      setThemify(" ");
    } else {
      setThemify("dark-theme");
    }
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("themeItem", themify);
    document.querySelector("body").className = themify;
  }, [themify]);

  return (
    <div>
      <div className="cursor-main">
        <div className="cursor-main-small"></div>
        <div className="cursor-main-big"></div>
      </div>
      <div className="overlay"></div>
      <header className="theme-header">
        <div className="theme" onClick={toggleTheme}>
          {!theme && <i className="bx bx-moon theme-icon"></i>}
          {theme && <i className="bx bx-sun theme-icon"></i>}
        </div>
      </header>
      <div className="navbar">
        <div className="nav-item-wrapper">
          <ul className="nav-unorder-list">
            <NavLink to="/">
              <li>
                <h2>Home</h2>
                <i className="bx bxs-home"></i>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li>
                <h2>about</h2>
                <i className="bx bxs-user"></i>
              </li>
            </NavLink>
            <NavLink to="/portfolio">
              <li>
                <h2>portfolio</h2>
                <i className="bx bxs-briefcase"></i>
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li>
                <h2>contact</h2>
                <i className="bx bxs-envelope-open"></i>
              </li>
            </NavLink>
            <NavLink to="/blog">
              <li>
                <h2>blog</h2>
                <i className="bx bxs-conversation"></i>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
