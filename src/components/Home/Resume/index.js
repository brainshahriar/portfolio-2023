import React from "react";
import "./resume.scss";
import { educationData } from "../data/educationData";
import { skillOptions } from "../data/skillTabData";
import { experienceData } from "../data/experienceData";

const Resume = () => {
    return (
        <div className="resume-section">
            <p className="resume-section__title">Resume</p>
            <div className="resume-section__content">
                <div className="resume-section__content__left">
                    <p className="resume-section__content__title">Summary</p>
                    <div className="resume-section__content__section resume-section__content__section--last">
                        <p className="resume-section__content__sub-title">
                            Al Shariyar
                        </p>
                        <p className="resume-section__content__description">
                            Innovative and deadline-driven software engineer
                            with 2.5+ years of experience designing and
                            developing user-friendly Application from scratch. I
                            have experience working as part of a team and
                            individually. I am flexible in my working hours,
                            being able to work evenings and weekends.
                        </p>
                        <ul className="resume-section__content__list">
                            <li>Adabar,Mohammadpur,Dhaka,Bangladesh</li>
                            <li>+8801766363513</li>
                            <li>ahmedjubayer54@gmail.com</li>
                        </ul>
                    </div>
                    <p className="resume-section__content__title">Education</p>
                    {educationData().map((education, i) => (
                        <div
                            className={`resume-section__content__section ${
                                i === educationData().length - 1 &&
                                "resume-section__content__section--last"
                            }`}
                        >
                            <p className="resume-section__content__sub-title">
                                {education.degree}
                            </p>
                            <div className="resume-section__content__time">
                                <p>{education.year}</p>
                            </div>
                            <p className="resume-section__content__organization">
                                {education.institute}
                            </p>
                            <p className="resume-section__content__result">
                                {education.result_name +
                                    " : " +
                                    education.result}
                            </p>
                            <p className="resume-section__content__description">
                                {education.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="resume-section__content__right">
                    <p className="resume-section__content__title">Skills</p>
                    <div className="resume-section__content__section resume-section__content__section--last">
                        <p className="resume-section__content__sub-title">
                            Software Developer
                        </p>
                        <p className="resume-section__content__description">
                            Innovative and deadline-driven software engineer
                            with 2.5+ years of experience designing and
                            developing user-friendly Application from scratch. I
                            have experience working as part of a team and
                            individually. I am flexible in my working hours,
                            being able to work evenings and weekends.
                        </p>
                        <ul className="resume-section__content__list">
                            {skillOptions().map((skill) => (
                                <li>
                                    {skill.title} :{" "}
                                    {skill.data.map((item, i) => (
                                        <span className="resume-section__content__skill-item">{item.title}</span>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="resume-section__content__title">Professional Experience</p>
                    {experienceData().map((experience, i) => (
                        <div
                            className={`resume-section__content__section ${
                                i === experienceData().length - 1 &&
                                "resume-section__content__section--last"
                            }`}
                        >
                            <p className="resume-section__content__sub-title">
                                {experience.position}
                            </p>
                            <div className="resume-section__content__time">
                                <p>{experience.year}</p>
                            </div>
                            <p className="resume-section__content__organization">
                                {experience.organization}
                            </p>
                            <p className="resume-section__content__address">
                                {experience.address}
                            </p>
                            <p className="resume-section__content__description">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resume;
