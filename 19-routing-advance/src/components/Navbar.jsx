import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 items-center bg-cyan-900 justify-between">
      <h2 className="text-2xl font-bold">Prince</h2>
      <div className="flex gap-10">
        <a className="text-medium font-bold" href="/">
          Home
        </a>
        <a className="text-medium font-bold" href="/About">
          About
        </a>
        <a className="text-medium font-bold" href="/Contact">
          Contact
        </a>
        <a className="text-medium font-bold" href="/Product">
          Product
        </a>
      </div>
    </div>
  );
};

export default Navbar;
