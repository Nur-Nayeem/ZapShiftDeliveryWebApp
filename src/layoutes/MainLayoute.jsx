import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/navbar/Navbar";

const MainLayoute = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#eaeced] overflow-x-hidden">
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto my-10">
        <Outlet />
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default MainLayoute;
