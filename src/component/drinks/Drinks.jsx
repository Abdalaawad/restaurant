import React from "react";
import "./Drinks.css";
import sop from "../../assets/Frame 17.png";
import drink from "../../assets/img.png";
const Drinks = () => {
  return (
    <div className="app-drinks">
      <div className="app-drinks-content">
        <h3>Contact</h3>
        <div className="app-drinks-image-heading">
          <img src={sop} alt="sop" />
        </div>
        <h2>Find Us</h2>
        <div className="app-drinks-p">
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        </div>
        <div className="app-drinks-date">
          <h4>Opening Hours</h4>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>

          <p>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <div className="app-drinks-btn">
          <button>Visit Us</button>
        </div>
      </div>
      <div className="app-drinks-image">
        <img src={drink} alt="drink" />
      </div>
    </div>
  );
};

export default Drinks;
