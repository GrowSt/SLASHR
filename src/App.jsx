import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home/hero";
import Footer from "./component/footer";
import About from "./component/about/about";

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
