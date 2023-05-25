import React from "react";
import Center from "./Header-center";
import Top from "./Header-top";
import "./index.scss";

const Header = () => {
  return (
    <div className="body">
      <Top/>
      <Center/>
    </div>
  );
};

export default Header;
