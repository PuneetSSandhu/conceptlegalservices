import React from "react";
import "./singleService.css";

function SingleService(props) {
  return (
    <div className="SingleService">
      <div className="single-service-container">
        <img src={props.imageURL} alt={props.altText} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default SingleService;
