import React from "react";
import "./index.scss";

const buttonData = [
    {
        name: "Groceries",
    },
    {
        name: "Premium Fruits",
    },
    {
        name: "Home & Kitchen",
    },
    {
        name: "Fashion",
    },
    {
        name: "Electronics",
    },
    {
        name: "Beauty",
    },
    {
        name: "Home Improvement",
    },
    {
        name: "Sports, Toys & Luggage",
    }
];

const Bottom = () => {
    return (
        <div className="header-bottom">
            {
                buttonData?.map((item, index) => (
                    <button className="header-bottom__btn">
                    {item.name}
                    <span className="header-bottom__btn--icon"></span>
                </button>
                ))
            }

        </div>
    );
};

export default Bottom;
