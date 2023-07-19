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
      <div className="contact-container">
        <div className="contact-info">
          <Link
            to={`tel:${contactData.mobile}`}
            style={{
              textDecoration: "none",
              color: "black",
              whiteSpace: "nowrap",
              marginRight: "10px",
              paddingRight: "10px",
              fontSize: "1.5rem",
              borderRight: "1px solid black",
            }}
            className="link"
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
              fontSize: "1.5rem",
              borderRight: "1px solid black",
            }}
            className="link"
          >
            {`Office: ${formatPhoneNumber(contactData.phone)}`}
          </Link>
          <Link
            to={`mailto:${contactData.email}`}
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.5rem",
              marginRight: "10px",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
            className="link"
          >
            {`Email: ${contactData.email}`}
          </Link>
          <div className="contact-item">
            <a href={`tel:${contactData.mobile}`} className="contact-link">
              <span className="contact-label">Mobile:</span>
              <span className="contact-value">
                {formatPhoneNumber(contactData.mobile)}
              </span>
            </a>
          </div>
          <div className="contact-item">
            <a href={`tel:${contactData.phone}`} className="contact-link">
              <span className="contact-label">Office:</span>
              <span className="contact-value">
                {formatPhoneNumber(contactData.phone)}
              </span>
            </a>
          </div>
          <div className="contact-item">
            <a href={`mailto:${contactData.email}`} className="contact-link">
              <span className="contact-label">Email:</span>
              <span className="contact-value">{contactData.email}</span>
            </a>
          </div>
        </div>
      </div>
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
