import React from "react";
import "./LeftBar.scss";
import Profile from "../../assets/images/profile.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { AiOutlineBlock } from "react-icons/ai";
import { languageData } from "./data/languageData";
import { skillsData } from "./data/skillsData";


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
                    <a href="" alt="">
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
                <hr className="left-bar__line" />
            </section>
            <section className="left-bar__info-section">
                <div className="left-bar__age">
                    <p className="left-bar__age__style">Age:</p>
                    <p className="left-bar__age__number">24</p>
                </div>
                <div className="left-bar__residence">
                    <p className="left-bar__residence__style">Residence</p>
                    <p className="left-bar__residence__text">BD</p>
                </div>
                <div className="left-bar__frelance">
                    <p className="left-bar__frelance__style">Freelance:</p>
                    <p className="left-bar__frelance__text">Available</p>
                </div>
                <div className="left-bar__address">
                    <p className="left-bar__address__style">Address:</p>
                    <p className="left-bar__address__text">Dhaka,Bangladesh</p>
                </div>
                <hr className="left-bar__line2" />
            </section>
            <section className="left-bar__language-section">
                <p className="left-bar__language-section__title">Languages</p>
                {
                    languageData().map((data,i)=><> <div className="left-bar__progress">
                    <p>{data.name}</p>
                    <p>{data.percentage}</p>
                </div>
                <div className="left-bar__progress-bar"><div className="left-bar__progress-bar__line" style={{width:`${data.percentage}`}}></div></div></>)
                }
                <hr className="left-bar__line2" />
            </section>
            <section className="left-bar__language-section">
                <p className="left-bar__language-section__title">Skils</p>
                {
                    skillsData().map((data,i)=><> <div className="left-bar__progress">
                    <p>{data.name}</p>
                    <p>{data.percentage}</p>
                </div>
                <div className="left-bar__progress-bar"><div className="left-bar__progress-bar__line" style={{width:`${data.percentage}`}}></div></div></>)
                }
                <hr className="left-bar__line2" />
            </section>
            <section className="left-bar__extra-skill-section">
                <p className="left-bar__extra-skill-section__title">
                    Extra Skils
                </p>
                <div className="left-bar__extra-skill-section__area">
                    <BiBrain className="left-bar__icon" />
                    <p className="left-bar__icon__text">
                        Bootstrap, Materialize
                    </p>
                </div>
                <div className="left-bar__extra-skill-section__area">
                    <BiBrain className="left-bar__icon" />
                    <p className="left-bar__icon__text">Stylus, Sass, Less</p>
                </div>
                <div className="left-bar__extra-skill-section__area">
                    <BiBrain className="left-bar__icon" />
                    <p className="left-bar__icon__text">Gulp, Webpack, Grunt</p>
                </div>
                <div className="left-bar__extra-skill-section__area">
                    <AiOutlineBlock className="left-bar__icon" />
                    <p className="left-bar__icon__text">GIT Knowledge</p>
                </div>
                <hr className="left-bar__line2" />
            </section>
            <a class="left-bar__button">
                <span class="left-bar__button__text">Download Now</span>
                <BsDownload className="left-bar__button__icon" />
            </a>
        </div>
    );
};

export default LeftBar;
