import React from 'react';
import "./skills.scss";
import { skillOptions } from "../data/skillTabData";
import { useState } from 'react';
import ServiceCard from '../ServiceCard';
import SkillCard from '../SkillCard';
const Skills = () => {
    const [option,setOption]=useState(skillOptions()[0])
    return (
        <div className="skill-section">
            <div className="skill-section__tab">
                 {
                    skillOptions().map((skill,i) =>
                       <p key={i} className={`skill-section__tab__item ${option.tabValue === skill.tabValue && 'skill-section__tab__item--active'}`} onClick={()=>setOption(skill)}>{skill.title}</p>
                    )
                 }
            </div>
            <div className="skill-section__card-container">
                    {option.data.map((item, i) => (
                        <SkillCard key={i} skill={item} />
                    ))}
            </div>
            
        </div>
    );
};

export default Skills;
