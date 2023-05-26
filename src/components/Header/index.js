import React from "react";
import Center from "./Header-center";
import Top from "./Header-top";
import "./index.scss";
import Bottom from "./Header-bottom";

const Header = () => {
  return (
    <div className="body">
      <Top/>
      <Center/>
      <div className="body__vl"></div>
      <Bottom/>   
      <div className="body__vl"></div>
    </div>
  );
};

export default Header;
