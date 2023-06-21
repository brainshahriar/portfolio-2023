import React from "react";
import "./home.scss";
import HeroTop from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data/serviceData";
import PriceCard from "./ProjectCard";
import { projectData } from "./data/projectData";
import Resume from "./Resume";
import Carousel from "./Carousel";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";

const Home = () => {
    return (
        <div className="home-content">
            <HeroTop />
            <About />
            <Skills />
            <Resume />
            <div className="home-content__section">
                <p className="home-content__section__title">My Services</p>
                <p className="home-content__section__sub-title">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. lorem ipsum
                </p>
                <div className="home-content__section__card-container">
                    {serviceData().map((data, i) => (
                        <ServiceCard key={i} service={data} />
                    ))}
                </div>
            </div>
            <div className="home-content__section">
                <p className="home-content__section__title">Projects</p>
                <p className="home-content__section__sub-title">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. lorem ipsum
                </p>
                <div className="home-content__section__card-container">
                    {projectData().map((data, i) => (
                        <ProjectCard key={i} projectData={data} />
                    ))}
                </div>
            </div>
            <div className="home-content__section">
                <p className="home-content__section__title">Gallery</p>
                <p className="home-content__section__sub-title">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. lorem ipsum
                </p>
                <div className="home-content__section__slider">
                    <Carousel />
                </div>
            </div>
            <div className="home-content__section">
                <p className="home-content__section__title">Contact</p>
                <p className="home-content__section__sub-title">
                    Have a question or want to work together? Leave a message.
                </p>
                <Contact />
            </div>
        </div>
    );
};

export default Home;
