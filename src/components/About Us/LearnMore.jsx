import React from "react";
import { FaHome } from "react-icons/fa"; // Home icon from react-icons
import logoImage from "../../assets/logo.png"; // Replace with your logo image path

const LearnMorePage = () => {
  // Function to navigate back to the home page when clicking the Home icon
  const goHome = () => {
    window.location.href = "/"; // This will take the user to the homepage
  };

  return (
    <div className="learn-more-page">
      {/* Navbar with image logo on the left and home icon on the right */}
      <div className="learn-more-navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
        <FaHome className="home-icon" onClick={goHome} />
      </div>

      <p className="about-us-title">More About Us</p>
      <p>
        At K&A, we are committed to realizing a vision of unparalleled luxury by facilitating the import and export of exclusive products that epitomize the artistry, natural beauty, and rich heritage of both Saudi Arabia and France.
      </p>
      <h3>Mission Statement</h3>
      <p>
        Our mission is to connect artisans from Saudi Arabia and France, offering a curated selection of goods that showcase their artistry and authenticity.
      </p>
      <h3>Vision Statement</h3>
      <p>
        We aspire to be the leading platform for cultural exchange through artisanal goods, creating lasting connections and fostering appreciation for the artistry of both cultures.
      </p>
    </div>
  );
};

export default LearnMorePage;
