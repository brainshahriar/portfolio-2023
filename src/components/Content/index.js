import React from "react";
import "./content.scss";
import profileImg from "../../assets/images/profile.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Content = () => {
    return (
        <div className="home-content">
            <div className="home-content__hero-section">
                <div className="home-content__profile-info">
                    <p className="home-content__profile-title">
                        I'm Al Shahriar <br />
                        <span className="home-content__profile-title--hilight">
                            Front-end
                        </span>{" "}
                        Developer
                    </p>
                    <p className="home-content__profile-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et, volutpat feugiat placerat lobortis. Natoque rutrum
                        semper sed suspendisse nunc lectus.
                    </p>
                    <button className="home-content__hire-btn">HIRE ME <span className="home-content__hire-btn__icon"><AiOutlineArrowRight/></span></button>
                </div>
                <img className="home-content__profile-img" src={profileImg} />
            </div>
            
        </div>
    );
};

export default Content;
