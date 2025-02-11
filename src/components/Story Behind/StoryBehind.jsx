import React, { useState } from 'react';
import './StoryBehind.css'; // Import CSS for styling
import image1 from '../../assets/hero7.jpg';
import image2 from '../../assets/hero7.jpg';

export default function StoryBehind() {
  const [showPopup, setShowPopup] = useState(false);

  const initialText = `After immersing ourselves in both French and Arabic cultures, we’ve recognized a shared desire to reconnect with authenticity. Rather than simply revisiting history, there is a deep appreciation for traditional handmade items, organic materials, distinctive craftsmanship, and the essence of nature and heritage. Amid the rapid economic growth and evolving retail demands, people increasingly seek what is genuine and original—hidden treasures that speak to a sense of place and tradition

.`;
  const additionalText = ` Having deeply immersed ourselves in both French and Arabic cultures, we have identified a shared commitment to rediscovering authenticity. This goes beyond merely revisiting history—it reflects a profound appreciation for traditional craftsmanship, organic materials, and the timeless connection to nature and heritage. In an era marked by rapid economic growth and evolving retail landscapes, discerning individuals are increasingly seeking products that are genuine and original—hidden treasures that embody a deep sense of place and tradition
`;

  return (
    <div id="story" className="story-behind">
      <p className='title'>Story Behind </p>

      <div className="images-container">
        <img className="image" src={image1} alt="Image 1" />
        <img className="image" src={image2} alt="Image 2" />
      </div>
      <div className="text-container">
        <p>{initialText}</p>
        <button className="see-more-button" onClick={() => setShowPopup(true)}>See More</button>
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content-wide" onClick={(e) => e.stopPropagation()}>
              <p>{initialText + additionalText}</p>
              <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}