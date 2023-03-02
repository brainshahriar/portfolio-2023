import React from "react";
import "./LeftBar.scss";
import Profile from "../../assets/images/profile.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const LeftBar = () => {
    return (
        <div className="left-bar">
            <section className="left-bar__profile-section">
                <div>
                    <img
                        className="left-bar__profile-img"
                        src={Profile}
                        alt=""
                    />
                    <div className="left-bar__active-dot"></div>
                </div>
                <p className="left-bar__name">Rayan Adlardard</p>
                <p className="left-bar__title">Front-end Developer</p>
                <div className="left-bar__social">
                        <a href="">
                            <BsFacebook />
                        </a>
                        <a href="">
                            <BsInstagram />
                        </a>
                        <a href="">
                            <BsTwitter />
                        </a>
                        <a href="">
                            <BsLinkedin />
                        </a>
                        <a href="">
                            <BsYoutube />
                        </a>
                        <a href="">
                            <FaGlobe />
                        </a>
                    </div>
                <hr  className="left-bar__line" />
            </section>
            <section className="left-bar__info-section">
                {/* <div>
                    <img
                        className="left-bar__profile-img"
                        src={Profile}
                        alt=""
                    />
                    <div className="left-bar__active-dot"></div>
                </div>
                <p className="left-bar__name">Rayan Adlardard</p>
                <p className="left-bar__title">Front-end Developer</p>
                <div className="left-bar__social">
                        <a href="">
                            <BsFacebook />
                        </a>
                        <a href="">
                            <BsInstagram />
                        </a>
                        <a href="">
                            <BsTwitter />
                        </a>
                        <a href="">
                            <BsLinkedin />
                        </a>
                        <a href="">
                            <BsYoutube />
                        </a>
                        <a href="">
                            <FaGlobe />
                        </a>
                    </div>
                <hr  className="left-bar__line" /> */}
            </section>
        </div>
    );
};

export default LeftBar;
