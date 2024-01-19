import React from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-[100] w-screen">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />{" "}
    </div>
  );
};

export default Header;
