import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="menuItems" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/cart">
              <li>Cart</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
