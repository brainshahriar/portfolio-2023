import React from "react";
import "./home.scss";
import HeroTop from "./Hero";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data/serviceData";

const Home = () => {
  return (
    <div className="home-content">
      <HeroTop />
      <div className="home-content__service">
        <p className="home-content__service__title">My Services</p>
        <p className="home-content__service__sub-title">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className="home-content__service__card-container">{
            serviceData().map((data,i)=><ServiceCard key={i} service={data}/>)
        }</div>
      </div>
    </div>
  );
};

export default Home;
