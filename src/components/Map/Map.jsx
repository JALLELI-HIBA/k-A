import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import map from '../../assets/WorldMap.png';
import './Map.css';

const galleries = {
  france: [
    'https://via.placeholder.com/300x200?text=France+Photo+1',
    'https://via.placeholder.com/300x200?text=France+Photo+2',
    'https://via.placeholder.com/300x200?text=France+Photo+3',
  ],
  saudi: [
    'https://via.placeholder.com/300x200?text=Saudi+Photo+1',
    'https://via.placeholder.com/300x200?text=Saudi+Photo+2',
    'https://via.placeholder.com/300x200?text=Saudi+Photo+3',
  ],
};

const Map = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  return (
    <div className="map-container">
    {/* Wrap the image inside a container with shadow */}
    <div className="map-image-container">
      <img src={map} alt="World Map" className="map-image" />
    </div>
  
    {/* Map pin for France */}
    <FaMapMarkerAlt
      className="map-pin france-pin"
      title="France"
      onClick={() => openGallery('france')}
    />
    
    {/* Map pin for Saudi Arabia */}
    <FaMapMarkerAlt
      className="map-pin saudi-pin"
      title="Saudi Arabia"
      onClick={() => openGallery('saudi')}
    />
  
    {/* Modal for displaying gallery */}
    {selectedGallery && (
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={closeGallery}>
            &times;
          </button>
          <h2>{selectedGallery === 'france' ? 'France Gallery' : 'Saudi Arabia Gallery'}</h2>
          <div className="gallery">
            {galleries[selectedGallery].map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Map;
