import React from "react";
import "./styles/App.scss";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Specialitties from "./components/Specialitties";
import AboutUs from "./components/AboutUs";
import SpecialDishes from "./components/SpecialDishes";
import Footer from "./components/Footer";
// import ProductFood from "./pages/ProductFood";
// import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <ProductFood/> */}
      <Home />
      <Brands />
      <Specialitties />
      <AboutUs />
      <SpecialDishes />
      <Footer />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Brands />} />
          <Route path="" element={<Specialitties />} />
          <Route path="" element={<AboutUs />} />
          <Route path="" element={<SpecialDishes />} />
          <Route path="" element={<Footer />} />
          <Route path="/happy-restaurants" element={<Home />} />
        </Routes> */}
    </div>
  );
};

export default App;
