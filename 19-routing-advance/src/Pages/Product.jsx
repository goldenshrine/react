import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className=" bg-cyan-800 p-5 flex justify-center gap-4 ">
        <Link to="/Product/Men">Mens</Link>
        <Link to="/Product/Women">Womens</Link>
      </div>
      <h1>Product Page</h1>
      <Outlet />
    </div>
  );
};

export default Product;
