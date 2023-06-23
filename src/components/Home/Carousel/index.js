import React from "react";
import Slider from "react-slick";
import "./carousel.scss";
import { galleryData } from "../data/galleryData";

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
            <div className="carousel">
                    <Slider {...settings}>
                        {galleryData().items.map((item) => (
                            <div key={item.id} className="carousel__image-div">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="carousel__image-div__img"
                                />
                                <p className="carousel__image-div__title">{item.title}</p>
                            </div>
                        ))}
                    </Slider>
            </div>
        </>
    );
};

export default Carousel;
