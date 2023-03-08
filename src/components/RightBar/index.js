import React, { useState } from "react";
import "./RightBar.scss";
import { GiMoon } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { sidebarLinks } from "./data/sidebarLink";

const RightBar = () => {
    const [active, setActive] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
      setUsername('');
      setPassword('');
      handleCloseModal();
    };
    return (
        <div className="right-bar">
            <div className="right-bar__moon-icon">
                <GiMoon />
            </div>
            <div className="right-bar__login-icon" onClick={handleOpenModal} title="login">
                <BiLogIn />
            </div>
            {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
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
