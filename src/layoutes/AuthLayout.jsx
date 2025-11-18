import React from "react";
import Logo from "../components/navbar/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      <div className="flex-1 px-16 py-10 ">
        <Logo />
        <div className="w-full h-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
      <div className="bg-primary/10 flex-1 hidden sm:flex items-center justify-center">
        <img src={authImg} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
