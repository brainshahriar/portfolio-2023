import React from "react";
import "./skillCard.scss";
import { BiChevronRight } from "react-icons/bi";

const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            <p className="skill-card__icon">{skill.icon}</p>
            <p className="skill-card__title">{skill.title}</p>
            <div className="skill-card__description">
                <p>{skill.description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
