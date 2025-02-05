import React from 'react';
import './StoryBehind.css'; 


import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';
import hero7 from '../../assets/hero7.jpg';
import hero5 from '../../assets/hero5.jpg';



export default function StoryBehind() {
  // Array of images to be displayed in the gallery
  const images = [
    { src: hero1, alt: 'Hero Image 1' },
    { src: hero2, alt: 'Hero Image 2' },
    { src: hero3, alt: 'Hero Image 3' },
    { src: hero7, alt: 'Hero Image 4' },
    { src: hero5, alt: 'Hero Image 5' }, 
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
