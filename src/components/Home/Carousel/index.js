import React from "react";
import "./index.scss";
import Slider from "./Slider";

const slides = [
    {
        url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
        title: 1,
    },
    {
        url: "https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
        title: 2,
    },
    {
        url: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
        title: 3,
    },
    {
        url: "https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg",
        title: 4,
    },
];
const Carousel = () => {
    return (
        <div className="home-carousel">
            <Slider slider={slides} />
        </div>
    );
};

export default Carousel;
