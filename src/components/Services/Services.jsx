import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div id='services' className="services-container">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {/* Sourcing Section */}
        <div className="service-card">
          <p className="service-title">Sourcing</p>
          <p className="service-description">
            At K&A, we are dedicated to carefully selecting partners who use the highest-quality, authentic materials.
            Additionally, we will work with local partners in France, known for their embodiment of French luxury.
          </p>
        </div>

        {/* Products Section */}
        <div className="service-card">
          <p className="service-title">Products</p>
          <p className="service-description">
            Each of our products authentically reflects its cultural origin, offering customers a meaningful connection to the heritage behind it.
            Authenticity is at the core of everything we offer, ensuring that every item tells a true story of tradition.
            <strong>We place the highest priority on sourcing exceptional, top-tier products.</strong>
          </p>
        </div>

        {/* Transport Section */}
        <div className="service-card">
          <p className="service-title">Transport</p>
          <p className="service-description">
            To ensure safe and efficient delivery, K&A will collaborate with reputable local shipping companies. This partnership focuses on:
          </p>
          <ul className="service-list">
            <li>Safe Delivery: Guaranteeing that products arrive in perfect condition.</li>
            <li>Efficient Coordination: Working closely with shipping partners for timely and reliable transport.</li>
            <li>Sustainability: Prioritizing eco-friendly practices in our logistics operations.</li>
          </ul>
        </div>
      </div>

      {/* E-commerce Section */}
      <div className="ecommerce-section">
        <p className="ecommerce-description">
          Our products are available on our own e-commerce website as well as through popular regional platforms in both France and Saudi Arabia,
          broadening our reach to customers looking for premium items.
        </p>
      </div>
    </div>
  );
};

export default Services;