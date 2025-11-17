import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayoute = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#eaeced] overflow-x-hidden">
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto my-10">
        <Outlet />
      </main>
      <footer className="container mx-auto bg-black text-white rounded-xl my-2.5">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayoute;
