import React from "react";
import "../Header-center/index.scss";
import Logo from "../../../assets/images/header/MegaMart.png";
import Icon from "../../../assets/images/header/Logo.png";
import Search from "../../../assets/images/header/Search.png";
import List from "../../../assets/images/header/list.png";
import User from "../../../assets/images/header/user.png";
import Cart from "../../../assets/images/header/Buy.png";

const Center = () => {
    return (
        <div className="header-center">
            <div className="header-center__left">
                <img className="header-center__left__icon" src={Icon} alt="1" />
                <img className="header-center__left__logo" src={Logo} alt="1" />
            </div>
            <div className="header-center__right">
                <form className="header-center__right__searchbox">
                    <button
                        className="header-center__right__searchbox--icon"
                        type="submit"
                    >
                        <img src={Search} alt="1" />
                    </button>

                    <input
                        className="header-center__right__searchbox header-center__right__searchbox--style"
                        type="text"
                        placeholder="Search essentials, groceries and more..."
                    />
                    <button
                        className="header-center__right__searchbox--list"
                        type="submit"
                    >
                        <img src={List} alt="1" />
                    </button>
                </form>
                <div className="header-center__right__btns">
                    <img
                        className="header-center__right__img1"
                        src={User}
                        alt="1"
                    />
                    Sign Up/Sign In
                    <div className="header-center__right__hr"></div>
                    <img
                        className="header-center__right__img2"
                        src={Cart}
                        alt="1"
                    />
                    Cart
                </div>
            </div>
        </div>
    );
};

export default Center;
