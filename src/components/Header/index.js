import React from "react";
import Categories from "./Categories";
import LeftLogo from "./LeftLogo";
import RightIcons from "./RightIcons";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8-xl">
            <LeftLogo />
          </div>
          
          <div className=" right-icons col-4-xl justify-space-between">
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
