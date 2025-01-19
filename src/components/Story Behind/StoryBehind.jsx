import React from 'react';
import './StoryBehind.css'; // Import the external CSS file

// Import images from the assets folder
import hero from '../../assets/hero.png';

export default function StoryBehind() {
  // Array of images to be displayed in the gallery
  const images = [
    { src: hero, alt: 'Hero Image 1' },
    { src: hero, alt: 'Hero Image 2' },
    { src: hero, alt: 'Hero Image 3' },
    { src: hero, alt: 'Hero Image 4' },
    { src: hero, alt: 'Hero Image 5' }, // Smaller width, taller height
  ];

  return (
    <div id="story">
      <h1 className="story-title">Story Behind</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
