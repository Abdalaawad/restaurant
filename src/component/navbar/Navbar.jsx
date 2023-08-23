import React from "react";
import "./Navbar.css";
import navbar from "../../assets/Frame 64.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav className="navbar-container">
      <div className="navbar-image">
        <img src={navbar} alt="" />
      </div>
      <ul className="navbar-content">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">pages</a>
        </li>
        <li>
          <a href="#footer">contact us</a>
        </li>
        <li>
          <a href="#cheef">blog</a>
        </li>
        <li>
          <a href="#description">landing</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="....">login/ registration</a>
        <div></div>
        <a href="#booktable">book table</a>
      </div>
      <div className="navbar-mobile-device">
        <RxHamburgerMenu
          color="#fff"
          fontSize="25px"
          onClick={() => setshow(true)}
        />
        {show && (
          <div className="navbar-mobile-overlay">
            <AiOutlineClose
              color="#fff"
              fontSize="25px"
              className="close"
              onClick={() => setshow(false)}
            />
            <ul className="navbar-content-mobile">
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#pages">pages</a>
              </li>
              <li>
                <a href="#contactus">contact us</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#home">landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
