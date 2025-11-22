import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import useAuth from "../../hook/useAuth";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("LogOut succefull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send parcel</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        {user && <NavLink to={"/dashboard/my-parcels"}>My parcels</NavLink>}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto rounded-xl px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-xl">
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn rounded-xl">
              Log Out
            </button>
            <figure className="size-9 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <img
                src={user.photoURL}
                onError={(e) => {
                  e.currentTarget.src = "/user.png";
                }}
                alt=""
                className="rounded-full w-full h-full"
              />
            </figure>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn rounded-xl">
              Sign In
            </Link>
            <Link to={"register"} className="btn rounded-xl bg-primary">
              Sign Up
            </Link>
          </>
        )}

        <Link className="">
          <BsArrowUpRightCircleFill className="size-8" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
