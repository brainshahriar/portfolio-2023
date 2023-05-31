import React from "react";
import "./Hero.scss";
import profileImg from "../../../assets/images/profile.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { AnalyticsEvent } from "../../../utils.js/gaEvent";


const HeroTop = () => {
  const handleEventChange = (tech) => {
    AnalyticsEvent("On Click", tech, 'Test Label');
  };

  return (
    <div className="hero-section">
      <div className="hero-section__profile-info">
        <p className="hero-section__profile-title">
          I'm Al Shahriar <br />
          <span className="hero-section__profile-title--highlight">
            <Typewriter
              options={{
                strings: ["Front-end Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="hero-section__profile-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <button
          className="hero-section__hire-btn"
          onClick={handleEventChange("Hire Me")}
        >
          Hire Me
          <span className="hero-section__hire-btn__icon">
            <AiOutlineArrowRight />
          </span>
        </button>
        <button
          className="hero-section__hire-btn"
          onClick={handleEventChange("Check CV")}
        >
          Check CV
          <span className="hero-section__hire-btn__icon">
            <AiOutlineArrowRight />
          </span>
        </button>
        {/* <button
          className="hero-section__hire-btn"
          onClick={handleButtonClick}
        >
          HotJar
          <span className="hero-section__hire-btn__icon">
            <AiOutlineArrowRight />
          </span>
        </button> */}
      </div>
      <img className="hero-section__profile-img" src={profileImg} alt="" />
    </div>
  );
};

export default HeroTop;
