import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
  Hero
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} | Home</title>
      </Helmet>

      <Navbar />
      <Hero />
      {/* <Landing /> */}

      <Services />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
