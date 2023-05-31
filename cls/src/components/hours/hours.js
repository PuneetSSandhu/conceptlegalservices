import React from "react";
import "./hours.css";
import { Button } from "@mui/material";

function Hours() {
  return (
    <div className="hours-container">
      <h1>Business Hours</h1>
      <p>Monday - Friday: 9am - 5pm</p>
      <p>Saturday: 10am - 2pm</p>
      <p>Sunday: Closed</p>

      <h3>To Book an Appointment</h3>
      <div className="appointment-container">
        <Button variant="contained">
          <a href="tel:555-555-5555">Call Us</a>
        </Button>
        <Button variant="contained">
          <a href="mailto:example@email.com?subject=Appointment Booking">
            Email Us
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Hours;
