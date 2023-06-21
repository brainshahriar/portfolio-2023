import React from "react";

import Slider from "react-slick";
import "./carousel.scss";
import Images from "../data/images";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <>
            <div className="content">
                    <Slider {...settings}>
                        {Images.map((item) => (
                            <div key={item.id} className="image-div">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="img"
                                />
                            </div>
                        ))}
                    </Slider>
            </div>
        </>
    );
};

export default Carousel;
