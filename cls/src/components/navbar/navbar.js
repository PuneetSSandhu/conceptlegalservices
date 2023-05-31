import React from "react";
import "./navbar.css";
import { headerData } from "../../data/headerData";
import { contactData } from "../../data/contactData";
import { Link } from "react-router-dom";

function Navbar() {
  // the naviation links in a horizontal list
  const navLinks = headerData.navLinks.map((link) => (
    <Link key={link.text} to={link.href} className="nav-link">
      {link.text}
    </Link>
  ));
  return (
    <div className="Navbar">
      <nav className="navbar-container">{navLinks}</nav>
      <Link
        to={`tel:${contactData.mobile}`}
        style={{
          textDecoration: "none",
          color: "black",
          whiteSpace: "nowrap",
          marginRight: "10px",
          paddingRight: "10px",
          fontSize: "0.9rem",
          borderRight: "1px solid black",
        }}
      >
        {`Mobile: ${formatPhoneNumber(contactData.mobile)}`}
      </Link>
      <Link
        to={`tel:${contactData.phone}`}
        style={{
          textDecoration: "none",
          color: "black",
          whiteSpace: "nowrap",
          paddingRight: "10px",
          fontSize: "0.9rem",
          borderRight: "1px solid black",
        }}
      >
        {`Office: ${formatPhoneNumber(contactData.phone)}`}
      </Link>
      <Link
        to={`mailto:${contactData.email}`}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "0.9rem",
          marginRight: "10px",
          paddingRight: "10px",
          paddingLeft: "10px",
        }}
      >
        {`${contactData.email}`}
      </Link>
    </div>
  );
}

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

export default Navbar;
