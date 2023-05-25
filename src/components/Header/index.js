import React from "react";
import "./index.scss";
import location from "../../assets/images/header/Location.png";
import truck from "../../assets/images/header/truck.png";
import discount from "../../assets/images/header/Discount.png";

const Header = () => {
  return (
    <div className="body">
      <div className="body__header-top">
        <div className="body__header-top__left">
          Welcome to worldwide Megamart!
        </div>
        <ul className="body__header-top__ul">
          <li>
            <img src={location} alt="1" />
            Deliver to 423651
          </li>
          <div className="body__header-top__vl"></div>
          <li>
            <img src={truck} alt="1" />
            Track your order
          </li>
          <div className="body__header-top__vl"></div>
          <li>
            <img src={discount} alt="1" />
            All Offers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
