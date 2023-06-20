import React from "react";
import "./about.scss";
import { MdOutlineDone } from "react-icons/md";

const index = () => {
    return (
        <div className="about-section">
            <p className="about-section__title">About Me</p>
            <div className="about-section__content">
                <p className="about-section__content__description">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️ I am fluent in classics like C++,
                    Java and Javascript. My current focus is on Web based
                    application. I always trying to apply my innovative ideas
                    for developing products with Modern Javascript Frameworks
                    like Node.js and React.js
                </p>
                <div className="about-section__content__vertical-line"></div>
                <div className="about-section__content__right">
                    <p className="about-section__content__title">Software Engineer</p>
                    <ul className="about-section__content__list">
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                        <li className="about-section__content__item"> <MdOutlineDone className="about-section__content__list-icon" /><strong>Birth Day:</strong> 30 jul 1998</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default index;
