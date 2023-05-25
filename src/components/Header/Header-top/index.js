import React from 'react';
import location from "../../../assets/images/header/Location.png";
import truck from "../../../assets/images/header/truck.png";
import discount from "../../../assets/images/header/Discount.png";
import './index.scss';

const Top = () => {
    return (
        <div className="header-top">
        <div className="header-top__left">
          Welcome to worldwide Megamart!
        </div>
        <ul className="header-top__ul">
          <li>
            <img src={location} alt="1" />
            Deliver to 423651
          </li>
          <div className="header-top__vl"></div>
          <li>
            <img src={truck} alt="1" />
            Track your order
          </li>
          <div className="header-top__vl"></div>
          <li>
            <img src={discount} alt="1" />
            All Offers
          </li>
        </ul>
      </div>
    );
};

export default Top;