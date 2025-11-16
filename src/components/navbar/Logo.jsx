import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h3 className="text-2xl font-bold -ms-2.5">ZapShift</h3>
      </div>
    </Link>
  );
};

export default Logo;
