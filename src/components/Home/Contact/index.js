import React from "react";
import "./contact.scss";
import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import GoogleMap from "../GoogleMap";

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-section__left">
                <label className="contact-section__left__item">
                    <span className="contact-section__left__icon">
                        <MdLocationPin />
                    </span>
                    Location:
                </label>
                <p className="contact-section__left__value">
                    Adabar,Mohammadpur,Dhaka,Bangladesh
                </p>
                <label className="contact-section__left__item">
                    <span className="contact-section__left__icon">
                        <MdEmail />
                    </span>
                    Email:
                </label>
                <p className="contact-section__left__value">
                    ahmedjubayer54@gmail.com
                </p>
                <label className="contact-section__left__item">
                    <span className="contact-section__left__icon">
                        <MdPhoneInTalk />
                    </span>
                    Call:
                </label>
                <p className="contact-section__left__value">+8801766363513</p>
                <GoogleMap />
            </div>
            <form className="contact-section__right">
                <input
                    type="text"
                    name="name"
                    className="contact-section__right__input"
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    className="contact-section__right__input"
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="subject"
                    className="contact-section__right__input"
                    placeholder="Subject"
                />
                <textarea
                    type="text"
                    name="message"
                    className="contact-section__right__input contact-section__right__input--area"
                    placeholder="Message"
                />
                <button type="submit"  className="contact-section__right__button">Send Message <RiSendPlaneFill className="contact-section__right__button__icon"/></button>
            </form>
        </div>
    );
};

export default Contact;
