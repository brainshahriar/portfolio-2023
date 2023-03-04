import React from "react";
import "./price-card.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { pricesOptions } from "../data/priceData";

const PriceCard = ({ priceData }) => {
  return (
    <div className="price-card">
      <div className="price-card__body">
        <p className="price-card__title">{priceData.title}</p>
        <p className="price-card__price">
          ${priceData.price}{" "}
          <span className="price-card__price--hour">/Hour</span>
        </p>
        <p className="price-card__description">{priceData.description}</p>
        <div className="price-card__content">
          {pricesOptions().map((data, i) => (
            <div>
              <div className="price-card__content__item">
                {priceData.actives.includes(i) ? (
                  <AiOutlineCheck className="price-card__content__icon price-card__content__icon--check" />
                ) : (
                  <RxCross2 className="price-card__content__icon" />
                )}
                <p
                  className={`price-card__content__text ${
                    priceData.actives.includes(i) &&
                    "price-card__content__text--check"
                  }`}
                >
                  {data}
                </p>
              </div>
              {i < pricesOptions().length - 1 && (
                <hr className="price-card__content__line" />
              )}
            </div>
          ))}
        </div>
        <button className={`price-card__button ${ priceData.popularStatus && 'price-card__button--active'}`}>ORDER NOW</button>
      </div>
      {priceData.popularStatus && (
        <p className='price-card__most-popular'>Most Popular</p>
      )}
    </div>
  );
};

export default PriceCard;
