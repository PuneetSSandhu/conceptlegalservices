import React from "react";
import "./hours.css";
import { Button } from "@mui/material";
import { contactData } from "../../data/contactData";

function Hours() {
  return (
    <div className="hours-container">
      <h1>Business Hours</h1>
      <p>Monday - Friday: 9am - 5pm</p>
      <p>Saturday: 10am - 2pm</p>
      <p>Sunday: Closed</p>

      <h3>To Book an Appointment</h3>
      <div className="appointment-container">
        <Button variant="contained" className="button">
          <a href={`tel:${contactData.mobile}`}>Call Us</a>
        </Button>
        <Button variant="contained" className="button">
          <a href={`mailto:${contactData.email}?subject=Appointment Booking`}>
            Email Us
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Hours;
