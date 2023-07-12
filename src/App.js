import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Expertise from "./components/Expertise";
import Faqs from "./components/Faqs";
import { Route, Routes } from "react-router-dom";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<HorizontalLinearStepper />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
