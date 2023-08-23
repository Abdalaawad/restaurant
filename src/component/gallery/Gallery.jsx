import React from "react";
import "./Gallery.css";
import {
  AiOutlineInstagram,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import ss from "../../assets/Frame 17.png";
import cala from "../../assets/cala-w6ftFbPCs9I-unsplash.png";
import chris from "../../assets/christian-coquet-p1sdBSnS3Qc-unsplash.png";
import paxel from "../../assets/pexels-prem-pal-singh-tanwar-602750 1.png";
import michele from "../../assets/michele-blackwell-rAyCBQTH7ws-unsplash 2.png";
import { useRef } from "react";

// AiOutlineArrowRight
// AiOutlineArrowLeft
const Gallery = () => {
  let usegallery = useRef("");
  let scroll = (direction) => {
    const { current } = usegallery;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  console.log(usegallery);
  return (
    <div className="app-gallery" id="gallery">
      <div className="app-gallery-content">
        <h3>Instgram</h3>
        <div className="app-gallery-image">
          <img src={ss} alt="soup" />
        </div>
        <p className="head-galley">Photo Gallery</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="app-gallery-btn">view more</button>
      </div>
      <div className="app-gallery-container-images" ref={usegallery}>
        <div className="app-gallery-box-image">
          <img src={michele} alt="egg" />
          <AiOutlineInstagram className="app-gallery-icon" />
        </div>

        <div className="app-gallery-box-image">
          <img src={paxel} alt="paxel" />
          <AiOutlineInstagram className="app-gallery-icon" />
        </div>
        <div className="app-gallery-box-image">
          <img src={chris} alt="chris" />
          <AiOutlineInstagram className="app-gallery-icon" />
        </div>
        <div className="app-gallery-box-image">
          <img src={cala} alt="cala" />
          <AiOutlineInstagram className="app-gallery-icon" />
        </div>
        <div className="app-gallery-slider">
          <AiOutlineArrowLeft
            className="arrow-left"
            onClick={() => scroll(`left`)}
          />
          <AiOutlineArrowRight
            className="arrow-right"
            onClick={() => scroll(`right`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
