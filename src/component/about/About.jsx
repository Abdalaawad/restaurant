import React from "react";
import "./About.css";
import g from "../../assets/G.png";
import sub from "../../assets/Frame 17.png";
import knife from "../../assets/savernake-knives-f4jl2ezowuM-unsplash 2.png";

const About = () => {
  return (
    <div className="about  app__bg" id="about">
      <div className="about-g-image">
        <img src={g} alt="g" />
      </div>
      <div className="about-box">
        <div className="about-about-us">
          <h1>About us</h1>
          <img src={sub} alt="sub" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="btn">Know More</button>
        </div>
        <div className="about-knife-image">
          <img src={knife} alt="" />
        </div>
        <div className="about-ourhistory">
          <h1>Our History</h1>
          <img src={sub} alt="sub" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="btn">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
