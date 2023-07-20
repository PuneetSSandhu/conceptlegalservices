import React from "react";
import { useState } from "react";
import "./navbar.css";
import { headerData } from "../../data/headerData";
import { Link } from "react-router-dom";
import { SwipeableDrawer, Button } from "@mui/material";

function Navbar() {
  // the naviation links in a horizontal list
  const navLinks = headerData.navLinks.map((link) => (
    <Link key={link.text} to={link.href} className="nav-link">
      {link.text}
    </Link>
  ));

  let [state, setState] = useState({
    nav: false
  });

  let anchor = "left";

  return (
    <div className="Navbar">
      <nav className="navbar-container">{navLinks}</nav>
      <React.Fragment key={anchor}>
        <Button
          onClick={toggleDrawer(anchor, setState, state)}
          className="menu-button"
        >
          <img src="/images/nav-drawer.png" alt="menu"></img>
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, setState, state)}
          onOpen={toggleDrawer(anchor, setState, state)}
        >
          <div className="drawer-links">
            {headerData.navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className="nav-link"
                onClick={toggleDrawer(anchor, setState, state)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

function toggleDrawer(anchor, setState, state) {
  return (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setState({ ...state, [anchor]: !state[anchor] });
  };
}

export default Navbar;
