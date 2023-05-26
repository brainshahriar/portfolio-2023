import React, { useState } from "react";
import "./index.scss";
import RightArrow from "../../../../assets/images/header/Arrow-right.png";
import LeftArrow from "../../../../assets/images/header/Arrow-left.png";

const Slider = ({ slider }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const gotoPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const gotoNext = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className="slider-body">
            <span className="slider-body__arrow" onClick={gotoPrevious}>
                <img src={LeftArrow} alt="1" />
            </span>
            <span className="slider-body__arrow" onClick={gotoNext}>
                <img src={RightArrow} alt="1" />
            </span>
            {
                slider.map((data, index) => (
                    <div className="slider-body__img">
                    <img src={data?.url} alt="1"/>
                </div>
                ))
            }
        </div>
    );
};

export default Slider;
