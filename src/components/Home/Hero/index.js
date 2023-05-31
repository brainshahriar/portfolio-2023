import React, { useEffect } from "react";
import "./Hero.scss";
import profileImg from "../../../assets/images/profile.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import ReactGA from 'react-ga';
import { v4 as uuidv4 } from 'uuid';


const HeroTop = () => {

  //To track the number of unique visitors
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);
      ReactGA.set({ userId: newUserId });
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
 
  // track any specific button
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
    const eventLabel = `Button Label (${randomNumber})`;
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: eventLabel,
    });
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
          onClick={handleButtonClick}
        >
          Hire Me
          <span className="hero-section__hire-btn__icon">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
      <img className="hero-section__profile-img" src={profileImg} alt="" />
    </div>
  );
};

export default HeroTop;
