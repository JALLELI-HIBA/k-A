import React from 'react';
import './Services.css';
import services from '../../assets/import-export.jpg';

const Services = () => {
  return (
    <div  id="services" className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="content-wrapper">
        <div className="text-section">
          <h3>Export to Saudi Arabia:</h3>
          <p>Luxury Furniture: Handcrafted furniture blending elegance and functionality.</p>
          <p>Home Décor: Unique French home decor items.</p>
          <p>Calligraphy Art: Exquisite French calligraphy pieces.</p>
          <p>Gourmet Products: High-quality gourmet food products from France.</p>
        </div>
        <div className="image-section">
          <img src={services} alt="services" />
        </div>
        <div className="text-section">
          <h3>Export to France:</h3>
          <p>Handmade Jewelry: Elegant pieces reflecting Saudi heritage.</p>
          <p>Original Perfumes: Exclusive fragrances with traditional Arabian scents.</p>
          <p>Oud: Rare and precious oud wood and oils.</p>
          <p>Traditional Crafts: A variety of handmade items showcasing Saudi artistry.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
