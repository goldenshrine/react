import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 items-center bg-cyan-900 justify-between">
      <h2 className="text-2xl font-bold">Prince</h2>
      <div className="flex gap-10">
        <Link className="text-medium font-semibold" to="/">
          Home
        </Link>
        <Link className="text-medium font-semibold" to="/about">
          About
        </Link>
        <Link className="text-medium font-semibold" to="/Courses">
          Courses
        </Link>
        <Link className="text-medium font-semibold" to="/Product">
          Product
        </Link>
        <Link className="text-medium font-semibold" to="/Contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
