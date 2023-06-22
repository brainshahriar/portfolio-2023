import React from "react";
import { RiHome2Fill, RiQuillPenFill,RiGalleryFill } from "react-icons/ri";
import { BsFillFileEarmarkCodeFill, BsFillChatLeftFill } from "react-icons/bs";
import { FaUserGraduate, FaBriefcase,FaUserCog } from "react-icons/fa";

export const sidebarLinks = () => {
    return [
        { icon: <RiHome2Fill />, name: "Home", link: "#" },
        { icon: <FaUserCog size={22}/>, name: "Skills", link: "#skills" },
        { icon: <FaUserGraduate />, name: "Resume", link: "#resume" },
        { icon: <BsFillFileEarmarkCodeFill />, name: "Services", link: "#service" },
        { icon: <FaBriefcase />, name: "Portfolio", link: "#portfolio" },
        { icon: <RiQuillPenFill size={22} />, name: "Blog", link: "#" },
        { icon: <RiGalleryFill />, name: "Gallery", link: "#gallery" },
        { icon: <BsFillChatLeftFill />, name: "Contact", link: "#contact" },
    ];
};
