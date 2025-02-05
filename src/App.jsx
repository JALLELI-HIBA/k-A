import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Map from "./components/Map/Map.jsx";
import AboutUs from "./components/About Us/AboutUs.jsx";

import StoryBehind from "./components/Story Behind/StoryBehind.jsx";
import ContactUs from "./components/contact Us/ContactUs.jsx";
import Services from "./components/Services/Services.jsx";

import Footer from "./components/Footer/Footer.jsx";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Map/>
     {/* <StoryBehind/> */}

     <AboutUs />

     <Services/>
<ContactUs />
<Footer />
     
    </div>
  );
};

export default App;
