import React from "react";
import "./LeftBar.scss";
import Profile from "../../assets/images/profile.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";

const LeftBar = () => {
  return (
    <div className="left-bar">
      <section className="left-bar__profile-section">
        <div>
          <img className="left-bar__profile-img" src={Profile} alt="" />
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
        <div className="left-bar__bangla">
          <p>Bangla</p>
          <p>100%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>English</p>
          <p>100%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>Spanush</p>
          <p>100%</p>
        </div>
          <hr className="left-bar__bar" />
        <hr className="left-bar__line2" />
      </section>
      <section className="left-bar__language-section">
        <p className="left-bar__language-section__title">Skils</p>
        <div className="left-bar__bangla">
          <p>Html</p>
          <p>90%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>CSS</p>
          <p>85%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>Js</p>
          <p>80%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>PHP</p>
          <p>75%</p>
        </div>
          <hr className="left-bar__bar" />
          <div className="left-bar__bangla">
          <p>WordPress</p>
          <p>40%</p>
        </div>
          <hr className="left-bar__bar" />
        <hr className="left-bar__line2" />
      </section>
      <section className="left-bar__extra-skill-section">
        <p className="left-bar__extra-skill-section__title">Extra Skils</p>
        <div className="left-bar__extra-skill-section__area">
          <BiBrain className="left-bar__icon"/>
          <p className="left-bar__icon__text">Bootstrap, Materialize</p>
        </div>
          {/* <div className="left-bar__bangla">
          <p>English</p>
          <p>100%</p>
        </div>
          <div className="left-bar__bangla">
          <p>Spanush</p>
          <p>100%</p>
        </div> */}
        <hr className="left-bar__line2" />
      </section>
    </div>
  );
};

export default LeftBar;
