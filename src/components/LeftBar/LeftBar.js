import React from "react";
import "./LeftBar.scss";
import Profile from "../../assets/images/profile.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineBlock } from "react-icons/ai";
import { languageData } from "./data/languageData";
import { skillsData } from "./data/skillsData";
import { socialLinksData } from "./data/socialLinkData";
import { extraSkillsData } from "./data/extraSkillsData";

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
                <p className="left-bar__name">Jubayer Al Alam</p>
                <p className="left-bar__title">Software Engineer</p>
                <div className="left-bar__social">
                    {socialLinksData().map((data, i) => (
                        <a href={data.link}>{data.icon}</a>
                    ))}
                </div>
            </section>
            <hr className="left-bar__line" />

            <div className="left-bar__scroll-div">
            <section className="left-bar__info-section">
                <div className="left-bar__info-section__item">
                    <p className="left-bar__info-section__label">Age:</p>
                    <p className="left-bar__info-section__value">24</p>
                </div>
                <div className="left-bar__info-section__item">
                    <p className="left-bar__info-section__label">Residence</p>
                    <p className="left-bar__info-section__value">BD</p>
                </div>
                <div className="left-bar__info-section__item">
                    <p className="left-bar__info-section__label">Freelance:</p>
                    <p className="left-bar__info-section__value left-bar__info-section__value--green">
                        Available
                    </p>
                </div>
                <div className="left-bar__info-section__item">
                    <p className="left-bar__info-section__label">Address:</p>
                    <p className="left-bar__info-section__value">
                        Dhaka,Bangladesh
                    </p>
                </div>
            </section>
            <hr className="left-bar__line" />
                <section className="left-bar__progress-section">
                    <p className="left-bar__progress-section__title">
                        Languages
                    </p>
                    {languageData().map((data, i) => (
                        <>
                            {" "}
                            <div className="left-bar__progress">
                                <p>{data.name}</p>
                                <p>{data.value}</p>
                            </div>
                            <div className="left-bar__progress-bar">
                                <div
                                    className="left-bar__progress-bar__line"
                                    style={{ width: `${data.percentage}` }}
                                ></div>
                            </div>
                        </>
                    ))}
                </section>
                <hr className="left-bar__line" />
                <section className="left-bar__progress-section">
                    <p className="left-bar__progress-section__title">Skils</p>
                    {skillsData().map((data, i) => (
                        <>
                            <div className="left-bar__progress">
                                <p>{data.name}</p>
                                <p>{data.value}</p>
                            </div>
                            <div className="left-bar__progress-bar">
                                <div
                                    className="left-bar__progress-bar__line"
                                    style={{ width: `${data.percentage}` }}
                                ></div>
                            </div>
                        </>
                    ))}
                </section>
                <hr className="left-bar__line" />
                <section className="left-bar__extra-skill-section">
                    <p className="left-bar__extra-skill-section__title">
                        Extra Skils
                    </p>
                    {extraSkillsData().map((data, i) => (
                        <div
                            key={i}
                            className="left-bar__extra-skill-section__area"
                        >
                            <AiOutlineBlock className="left-bar__extra-skill-section__icon" />
                            <p className="left-bar__extra-skill-section__text">
                                {data}
                            </p>
                        </div>
                    ))}
                </section>
                
            </div>
            <hr className="left-bar__line" />
            <a class="left-bar__button" href={'https://github.com/Jubayer777'} rel="noreferrer" target="_blank">
                <span class="left-bar__button__text">GitHub</span>
                <AiFillGithub size={24} className="left-bar__button__icon" />
            </a>
        </div>
    );
};

export default LeftBar;
