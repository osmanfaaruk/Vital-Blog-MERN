import React from "react";
import LowerNavbar from "./LowerNavbar";
import MiddleNavbar from "./MiddleNavbar";
import UpperNavbar from "./UpperNavbar";

const Navbar = () => {
  return (
    <div>
      <UpperNavbar />
      <MiddleNavbar />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
