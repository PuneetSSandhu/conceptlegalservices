// the header component with the logo and the navigation
import React from "react";
import "./header.css";
import { headerData } from "../../data/headerData";
import Navbar from "../navbar/navbar";

function Header() {
  return (
    <div className="Header">
      <header className="header-container">
        <img
          src={headerData.logoURL}
          className="App-logo"
          alt={headerData.altText}
        />
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
