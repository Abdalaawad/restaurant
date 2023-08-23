import React from "react";
import "./Header.css";
import hero from "../../assets/Hero img.png";
import Main from "../main-soup/Main";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-container">
        <div className="header-content">
          <Main title="Chase the new Flavour" />
          <h1 className="h1-gold">The key to Fine dining</h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button>Explore Menu</button>
        </div>
        <div className="header-image">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
