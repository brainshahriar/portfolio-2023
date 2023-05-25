import React from "react";
import "../Header-center/index.scss";
import Logo from "../../../assets/images/header/MegaMart.png";
import { HiMenuAlt2 } from "react-icons/hi";

const Center = () => {
  return (
    <div className="header-center">
      <div className="header-center__left">
          <HiMenuAlt2 className="header-center__left__icon" />
          <img className="header-center__left__logo" src={Logo} alt="1" />
      </div>
      <div className="header-center__right">
        {/* <div className="header-center__right__searchbox"> */}
            <input className="header-center__right__style" type='text'/>
        {/* </div> */}
        <button>Sign Up/Sign In</button>
        <div className="header-center__right__hr"></div>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Center;
