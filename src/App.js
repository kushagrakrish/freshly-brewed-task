import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";
import Navbar from "./components/Navbar";

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
