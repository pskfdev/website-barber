import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import About from "./page/About";
import PriceList from "./page/PriceList";
import Gallery from "./page/Gallery";
import Contact from "./page/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/price-list" element={<PriceList />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
