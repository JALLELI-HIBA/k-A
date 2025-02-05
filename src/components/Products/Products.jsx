import React from "react";
import "./Products.css";
import backgroundImage from "../../assets/Fot.jpg"; // Adjust the path as needed

export default function WhereToBuy() {
  return (
    <div className="where-to-buy-container">
      <div
        className="where-to-buy-box"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
     

        {/* Content */}
        <div className="where-to-buy-content">
          <p className="text-lg mb-6">
            Discover our exclusive collection of antiques and perfumes. Click the link below to explore and purchase our products.
          </p>
          <a
            href="https://example.com" // Replace with your actual selling website link
            target="_blank"
            rel="noopener noreferrer"
            className="where-to-buy-button"
          >
            Visit Our Store
          </a>
        </div>
      </div>
    </div>
  );
}
