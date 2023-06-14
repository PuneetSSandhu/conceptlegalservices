import React from "react";
import "./hero.css";
import { heroData } from "../../data/heroData";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={heroData.pictureURL} alt={heroData.altText} />
          <div className="hero-name">
            <p
              style={{
                fontSize: "0.7rem",
              }}
            >{`${heroData.name} / ${heroData.title}`}</p>
          </div>
        </div>
        <div className="hero-text">
          <h3>{heroData.subtitle}</h3>
          <p>
            Welcome to Concept Legal Services, a distinguished provider of legal
            assistance. With our extensive experience in the legal field, we are
            dedicated to simplifying complex legal matters and offering
            comprehensive support. Our team of highly skilled and personable
            paralegals is committed to guiding you through the intricacies of
            the legal landscape, ensuring that you receive the utmost
            professionalism and expert guidance.
          </p>
          <br />
          <p>
            At Concept Legal Services, we understand the challenges and
            uncertainties that can arise when dealing with legal issues. That's
            why we strive to alleviate your concerns by offering personalized
            solutions tailored to your unique circumstances. Whether you are
            facing a landlord-tenant dispute, seeking assistance with traffic
            violations, or requiring help with small court claims, our
            accomplished team is equipped with the knowledge and expertise to
            protect your rights and achieve favorable outcomes.
          </p>
          <br />
          <p>
            Integrity and professionalism are the pillars of our practice. We
            approach each case with unwavering attention to detail, conducting
            thorough research and analysis to establish a solid foundation for
            your legal matters. Our commitment to excellence extends to
            fostering transparent and open communication with our clients. We
            value your input, actively listen to your concerns, address your
            inquiries, and keep you informed about the progress of your case,
            ensuring that you remain well-informed throughout the legal process.
          </p>
          <br />
          <p>
            Concept Legal Services is dedicated to providing accessible and
            affordable legal services without compromising on quality. We firmly
            believe that justice should be within reach for all individuals.
            Therefore, we offer transparent pricing structures and strive to
            accommodate your specific financial needs.
          </p>
          <br />
          <p>
            We invite you to experience the difference of working with Concept
            Legal Services. Contact us today to schedule a consultation and
            discover how our professional team can assist you in navigating the
            complexities of the legal system efficiently and effectively. Rest
            assured, with Concept Legal Services by your side, you can approach
            your legal matters with confidence and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
