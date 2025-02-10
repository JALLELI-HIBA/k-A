import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Map from "./components/Map/Map.jsx";
import AboutUs from "./components/About Us/AboutUs.jsx";
import StoryBehind from "./components/Story Behind/StoryBehind.jsx";
import ContactUs from "./components/contact Us/ContactUs.jsx";
import Services from "./components/Services/Services.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LearnMorePage from "./components/About Us/LearnMore.jsx"; // Import LearnMorePage

const App = () => {
  const [view, setView] = useState("home");

  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <div>
      {/* Conditionally render Navbar based on the view */}
      {view !== "learnMore" && <Navbar />} {/* Hide Navbar for LearnMorePage */}

      {view === "home" && (
        <>
          <Hero />
          <AboutUs setView={setView} /> {/* Use setView */}
          <Services />
          <Map />
          <ContactUs />
          <Products />
        </>
      )}

      {view === "learnMore" && <LearnMorePage />}

      <Footer />
    </div>
  );
};

export default App;
