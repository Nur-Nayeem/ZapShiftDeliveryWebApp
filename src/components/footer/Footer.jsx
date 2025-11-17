import React from "react";
import Logo from "../navbar/Logo";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink to="">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="">About Us</NavLink>
      </li>
      <li>
        <NavLink to="">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="text-center flex flex-col w-full">
      <div className="max-w-4xl mx-auto flex flex-col  justify-center items-center space-y-2.5 my-2.5">
        <Logo />
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <ul className="flex flex-col sm:flex-row items-center justify-center gap-5 border-y border-dashed border-gray-300/50 py-2.5">
        {links}
      </ul>
      <div className="flex justify-center items-center gap-2.5 my-5">
        <FaFacebook />
        <FaFacebook />
        <FaFacebook />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Footer;
