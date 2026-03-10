import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Product/men" element={<Men />} />
        <Route path="/Product/Women" element={<Women />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
