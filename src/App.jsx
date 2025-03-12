import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home/hero";
import Footer from "./component/footer";
import About from "./component/about/about";
import Contact from "./component/about/contact";
import BookFree from './component/bookfree';
import LoadingScreen from "./component/loading";
import NotFound from "./component/notfound"; // Importing NotFound component

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/about-us/contact-us" element={<Contact />} />
            <Route path="/book-a-free-demo" element={<BookFree />} />
            <Route path="*" element={<NotFound />} />  {/* Handle 404 errors */}
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
