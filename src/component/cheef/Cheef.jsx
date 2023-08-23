import React from "react";
import "./Cheef.css";
import cheff from "../../assets/Image-1.png";

import signuture from "../../assets/Kevin Luo.png";
const Cheef = () => {
  return (
    <div className="app-cheef  app__bg" id="cheef">
      <div className="app-chef-image">
        <img src={cheff} alt="cheef" />
      </div>
      <div className="app-cheef-box">
        <div className="app-chef-heading">
          <h3>Chef’s Word</h3>
          <h1>What we believe in</h1>
        </div>
        <div className="app-chef-content">
          <p>
            <span>,,</span>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla
            lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac
            consequat, aliquam molestie lectus eu. Congue iaculis integer
            curabitur semper sit nunc.
          </p>
        </div>
        <div className="app-cheef-name">
          <h4>Kevin Luo</h4>
          <p>Chef & Founder</p>
        </div>
        <div className="app-cheef-sign">
          <img src={signuture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cheef;
