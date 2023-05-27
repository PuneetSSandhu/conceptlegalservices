import React from "react";
import "./Hero.css";
import {headerData } from "../../data/headerData";

function Hero(){
    return(
        <div className="hero-container">
            <img src={headerData.logo} alt="concept "></img>
        </div>
    )
}

export default Hero;