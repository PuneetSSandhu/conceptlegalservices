// the header component with the logo and the navigation
import React from "react";
import "./footer.css";
import { headerData } from "../../data/headerData";
import { contactData } from "../../data/contactData";
import { Link } from "react-router-dom";

function Footer() {
  // compute the pages
  const pages = headerData.navLinks.map((page) => (
    <Link key={page.text} to={page.href} className="navLink">
      {page.text}
    </Link>
  ));
  return (
    <div className="Footer">
      <footer className="footer-container">
        <ul className="nav-page-set">{pages}</ul>
        <div className="contact-data">
          <div className="unit">
            <p>Office: </p>
            <a href={`tel:${contactData.phone}`}>
              {formatPhoneNumber(contactData.phone)}
            </a>
          </div>
          <div className="unit">
            <p>Mobile: </p>
            <a href={`tel:${contactData.mobile}`}>
              {formatPhoneNumber(contactData.mobile)}
            </a>
          </div>
          <div className="unit">
            <p>Fax: </p>
            <a href={`fax:${contactData.fax}`}>
              {formatPhoneNumber(contactData.fax)}
            </a>
          </div>
          <div className="unit">
            <p>Email: </p>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
          </div>
          <div className="unit">
            <p>Address: </p>
            <p>{contactData.address}</p>
          </div>
        </div>
        <div className="address-data">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.183699359872!2d-79.69957762392939!3d43.74828194627612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d01965716e3%3A0x4a0c663d542cdfdc!2s20%20Maritime%20Ontario%20Blvd%20Unit%2016%2C%20Brampton%2C%20ON%20L6S%200E7!5e0!3m2!1sen!2sca!4v1685517175993!5m2!1sen!2sca"
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </footer>
      <p>©2023 by Concept Legal Services</p>
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

export default Footer;
