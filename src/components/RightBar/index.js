import React, { useState } from "react";
import "./RightBar.scss";
import { GiMoon } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { sidebarLinks } from "./data/sidebarLink";

const RightBar = () => {
    const [active, setActive] = useState(0);
    return (
        <div className="right-bar">
            <div className="right-bar__moon-icon">
                <GiMoon />
            </div>
            <div className="right-bar__login-icon" title="login">
                <BiLogIn />
            </div>
            <div className="right-bar__link-div">
                {sidebarLinks().map((data, i) => (
                    <div className="right-bar__link-item" key={i}>
                        <div>
                            <a
                                href={`/${data.link}`}
                                onClick={() => setActive(i)}
                                className={`right-bar__link-icon ${
                                    active === i &&
                                    "right-bar__link-icon--active"
                                }`}
                            >
                                {data.icon}
                            </a>
                        </div>
                        <div className="right-bar__link-hover-text">
                            {data.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightBar;
