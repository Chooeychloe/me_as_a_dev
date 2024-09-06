import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a junior Flutter developer with 2 years of experience
              building responsive and efficient mobile applications. My skills
              include Dart programming, UI/UX design, and integrating APIs to
              create seamless user experiences.
            </p>
            <p>
              Passionate about continuous learning and innovation, I enjoy
              tackling new challenges and refining my skills in cross-platform
              development. I am eager to contribute to projects that make a
              difference through technology.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Basic Java</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>REACT</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Android-Kotlin</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETERD</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY  CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
