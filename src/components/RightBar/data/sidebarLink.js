import React from "react";
import { RiHome2Fill, RiQuillPenFill } from "react-icons/ri";
import { BsFillFileEarmarkCodeFill, BsFillChatLeftFill } from "react-icons/bs";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";

export const sidebarLinks = () => {
    return [
        { icon: <RiHome2Fill />, name: "Home", link: "#" },
        { icon: <BsFillFileEarmarkCodeFill />, name: "Service", link: "#" },
        { icon: <FaUserGraduate />, name: "CV", link: "#" },
        { icon: <FaBriefcase />, name: "Portfolio", link: "#" },
        { icon: <RiQuillPenFill />, name: "Blog", link: "#" },
        { icon: <BsFillChatLeftFill />, name: "Contact", link: "#" },
    ];
};
