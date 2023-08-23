import "./Description.css";
import React from "react";
import sa from "../../assets/Frame 17.png";
const Description = () => {
  return (
    <div className="app-description " id="description">
      <div className="app-description-heading">
        <h2>Newsletter</h2>
        <div className="app-description-image">
          <img src={sa} alt="sa" />
        </div>
        <h1>Subscribe to Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
        <div className="app-description-input">
          <input type="text" required placeholder="email address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
