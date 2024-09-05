import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Dhan Belgica,</span> flutter developer based in the
        Philippines.
      </h1>
      <p>
        I'm a flutter developer from Bacoor, Cavite with 3 years of experiece in
        programming and 2 years experience in flutter development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
