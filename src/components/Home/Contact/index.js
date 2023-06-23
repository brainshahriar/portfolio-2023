import React, { useRef, useState } from "react";
import "./contact.scss";
import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import GoogleMap from "../GoogleMap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import { contactData } from "../data/contactData";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_zqeruoy",
                "template_vd0dhy9",
                form.current,
                "user_WoPM157PmNm5aE4Zzm6Lc"
            )
            .then(
                (result) => {
                    let timerInterval;
                    Swal.fire({
                        title: "Your Message is sending...",
                        html: "Will close in <b></b> milliseconds.",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const b =
                                Swal.getHtmlContainer().querySelector("b");
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft();
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        },
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-section">
            <div className="contact-section__left">
                {
                    contactData().items.map((data,i)=><><label className="contact-section__left__item">
                    <span className="contact-section__left__icon">
                        {data.icon}
                    </span>
                    {data.label}:
                </label>
                <p className="contact-section__left__value">
                    {data.value}
                </p></>)
                }

                <div className="contact-section__left__map"><GoogleMap /></div>
            </div>
            <form
                ref={form}
                className="contact-section__right"
                onSubmit={sendEmail}
            >
                <input
                    type="text"
                    name="name"
                    className="contact-section__right__input"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="contact-section__right__input"
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    className="contact-section__right__input"
                    placeholder="Subject"
                    required
                />
                <textarea
                    type="text"
                    name="message"
                    className="contact-section__right__input contact-section__right__input--area"
                    placeholder="Message"
                    required
                />
                <button
                    type="submit"
                    className="contact-section__right__button"
                >
                    Send Message{" "}
                    <RiSendPlaneFill className="contact-section__right__button__icon" />
                </button>
            </form>
        </div>
    );
};

export default Contact;
