import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../../contexts/ThemeContext";

import "./SingleService.css";

function SingleService({ id, title, imageLink, description }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade bottom>
      <div
        key={id}
        className="single-service"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="service-content" style={{ color: theme.tertiary }}>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
          <img src={imageLink} alt={title} />
          <p>{description}</p>
        </div>
      </div>
    </Fade>
  );
}

export default SingleService;
