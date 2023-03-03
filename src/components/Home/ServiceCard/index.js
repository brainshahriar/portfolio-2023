import React from 'react';
import './service-card.scss'
import { BiChevronRight } from "react-icons/bi";

const ServiceCard = ({service}) => {
    return (
        <div className='service-card'>
            {
                service.icon && <img className="service-card__icon" src={service.icon} alt=""/>
            }
            <p className="service-card__title">{service.title}</p>
            <p className="service-card__description">{service.description}</p>
            {
                service.link && <button className="service-card__button">ORDER NOW < BiChevronRight className="service-card__button__arrow"/></button>
            }
        </div>
    );
};

export default ServiceCard;