import React from "react";
import "./Footer.css";
import aaa from "../../assets/Frame 17.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app-footer app__bg " id="footer">
      <div className="app-footer-content">
        <h2>Contact Us</h2>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <div className="app-footer-number">
          <p>+1 212-344-12300</p>
          <p>+1 212-555-123</p>
        </div>
      </div>
      <div className="app-footer-content">
        <h2 className="ger">Gericht</h2>
        <p className="foot-gericht">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <div className="app-footer-image">
          <img src={aaa} alt="aaa" />
        </div>
        <div className="app-footer-media-icon">
          <a href="https://www.facebook.com/">
            <FaFacebookF className="media-icon-foot" />
          </a>
          <a href="https://twitter.com/home?lang=ar">
            {" "}
            <AiOutlineTwitter className="media-icon-foot" />
          </a>
          <a href="https://www.instagram.com/">
            {" "}
            <AiOutlineInstagram className="media-icon-foot" />
          </a>
        </div>
      </div>
      <div className="app-footer-content">
        <h2>Working Hours</h2>
        <p>Monday-Friday: 08:00 am -12:00 am</p>
        <div className="app-footer-number">
          <p>Saturday-Sunday:</p>
          <p>+1 212-555-123</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
