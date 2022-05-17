import React from "react";
import Categories from "./Categories";
import LeftLogo from "./LeftLogo";
import RightIcons from "./RightIcons";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-4-sm  col-6-md col-8-lg">
            <LeftLogo />
          </div>
          
          <div className=" right-icons  col-8-sm col-6-md col-4-lg justify-space-between">
            <RightIcons />
          </div>
        </div>
        <div className="categories">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Header;
