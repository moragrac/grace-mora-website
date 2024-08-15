import React from "react";

import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav>
          <ul>
            <h1>Grace Mora</h1>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
