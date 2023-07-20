// the header component with the logo and the navigation
import React from "react";
import "./header.css";
import { headerData } from "../../data/headerData";
import Navbar from "../navbar/navbar";
import { contactData } from "../../data/contactData";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="header-container">
        <div className="logo-contact">
          <img
            src={headerData.logoURL}
            className="App-logo"
            alt={headerData.altText}
          />
          <div className="contact-container">
            <div className="contact-info">
              <div className="phone-numbers">
                <Link
                  to={`tel:${contactData.mobile}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    whiteSpace: "nowrap",
                    marginRight: "10px",
                    paddingRight: "10px",
                    fontSize: "1.5rem"
                  }}
                  className="link left-phone"
                >
                  {`🖁 ${formatPhoneNumber(contactData.mobile)}`}
                </Link>
                <Link
                  to={`tel:${contactData.phone}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    whiteSpace: "nowrap",
                    paddingRight: "10px",
                    fontSize: "1.5rem"
                  }}
                  className="link"
                >
                  {`☏ ${formatPhoneNumber(contactData.phone)}`}
                </Link>
              </div>
              <Link
                to={`mailto:${contactData.email}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                  marginRight: "10px"
                }}
                className="link"
              >
                {`✉ ${contactData.email}`}
              </Link>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
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

export default Header;
