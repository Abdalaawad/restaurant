import React from "react";
// import Menuitem from "./menuitem/Menuitem"
import sppon from "../../assets/Frame 17.png";
import image from "../../assets/Image.png";
import Menuitem from "../menuitem/Menuitem";

import "./Specialmenu.css";

const Specialmenu = () => {
  let Wine = [
    {
      id: 1,
      title: "Chapel Hill Shiraz",
      price: "$56",
      bot: "AU | Bottle",
    },
    {
      id: 2,
      title: "Chapel Hill Shiraz",
      price: "$56",
      bot: "AU | Bottle",
    },
    {
      id: 3,
      title: "Chapel Hill Shiraz",
      price: "$56",
      bot: "AU | Bottle",
    },
    {
      id: 4,
      title: "Chapel Hill Shiraz",
      price: "$56",
      bot: "AU | Bottle",
    },
    {
      id: 5,
      title: "Chapel Hill Shiraz",
      price: "$56",
      bot: "AU | Bottle",
    },
  ];
  return (
    <div className="app-specailmenu">
      <div className="app-specialmenu-heading">
        <h3>Menu that fits you palatte</h3>
        <img src={sppon} alt="spoon" />
        app-specialmenu-content
        <h1>Today’s Special</h1>
      </div>
      <div className="app-specialmenu-content">
        <div className="app-specialmenu-wine">
          <h1 className="app-heading">Wine & Beer</h1>
          <div className="app-specialmenu-item">
            {Wine.map(function (wines) {
              return (
                <Menuitem
                  key={wines.id}
                  title={wines.title}
                  bot={wines.bot}
                  price={wines.price}
                />
              );
            })}
          </div>
        </div>
        <div className="app-spcial-image">
          <img src={image} alt="jouce" />
        </div>
        <div className="app-specialmenu-wine">
          <h1 className="app-heading">Cocktails</h1>
          <div className="app-specialmenu-item">
            {Wine.map(function (wines) {
              return (
                <Menuitem
                  key={wines.id}
                  title={wines.title}
                  bot={wines.bot}
                  price={wines.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="app-specialmenu-btn">
        <button className="special-btn">view more</button>
      </div>
    </div>
  );
};

export default Specialmenu;
