import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutUs from "./components/About Us/AboutUs.jsx";
import ContactUs from "./components/contact Us/ContactUs.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     <AboutUs />
<ContactUs />
      {/* <Hero /> */}
      {/* <div className="container">
      </div> */}
    </div>
  );
};

export default App;
