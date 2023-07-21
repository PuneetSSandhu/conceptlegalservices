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
                    fontSize: "1.5rem",
                  }}
                  className="link left-phone"
                >
                  <b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </b>
                  <p>{`${formatPhoneNumber(contactData.mobile)}`}</p>
                </Link>
                <Link
                  to={`tel:${contactData.phone}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    whiteSpace: "nowrap",
                    paddingRight: "10px",
                    fontSize: "1.5rem",
                  }}
                  className="link"
                >
                  <b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </b>
                  <p>{`${formatPhoneNumber(contactData.phone)}`}</p>
                </Link>
              </div>
              <Link
                to={`mailto:${contactData.email}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.5rem",
                  marginRight: "10px",
                }}
                className="link"
              >
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </b>
                <p>{`${contactData.email}`}</p>
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
