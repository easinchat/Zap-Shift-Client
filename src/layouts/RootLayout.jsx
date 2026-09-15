import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shered/Footer/Footer";
import Navbar from "../Pages/Shered/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-#EAECED">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
