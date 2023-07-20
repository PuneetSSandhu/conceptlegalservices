import React from "react";
import { SingleService } from "../../components";
import { serviceData } from "../../data/serviceData";

function Home() {
  // render the services
  const services = serviceData.map((service) => (
    <SingleService
      key={service.id}
      title={service.name}
      imageURL={service.imgURL}
      description={service.description}
      altText={`${service.name} heading`}
    />
  ));

  return (
    <div className="Home">
      <div className="service-container">{services}</div>
    </div>
  );
}

export default Home;
