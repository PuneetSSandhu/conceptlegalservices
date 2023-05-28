import React, { useContext } from "react";
import "./Hero.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Hero() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className="hero-container" style={{ backgroundColor: theme.primary }}>
      <img src={headerData.logo} alt="concept "></img>
    </div>
  );
}

export default Hero;
