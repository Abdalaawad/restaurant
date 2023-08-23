import React from "react";
import "./Larurles.css";
import souuu from "../../assets/Frame 17.png";
import one from "../../assets/Group 26-1.png";
import gres from "../../assets/Group 43.png";
import two from "../../assets/Group 25.png";
import three from "../../assets/Group 26.png";
import four from "../../assets/Group 27.png";

const Larurels = () => {
  return (
    <div className="app-larurles  app__bg">
      <div className="app-larurles-layout">
        <div className="app-larurles-header">
          <h3>Awards & recognition</h3>
          <div className="app-larurles-image">
            <img src={souuu} alt="soup" />
          </div>
          <h1>Our Laurels</h1>
        </div>
        <div className="app-larurles-container">
          <div className="app-larurles-box">
            <div className="app-larules-box-image">
              <img src={one} alt="one" />
            </div>
            <div className="app-larurles-box-conent">
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="app-larurles-box">
            <div className="app-larules-box-image">
              <img src={two} alt="one" />
            </div>
            <div className="app-larurles-box-conent">
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="app-larurles-box">
            <div className="app-larules-box-image">
              <img src={three} alt="one" />
            </div>
            <div className="app-larurles-box-conent">
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className="app-larurles-box">
            <div className="app-larules-box-image">
              <img src={four} alt="one" />
            </div>
            <div className="app-larurles-box-conent">
              <h3>Bib Gourmond</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app-larurles-box-image-g">
        <img src={gres} alt="g" />
      </div>
    </div>
  );
};

export default Larurels;
