import React, { useState } from 'react';
import './AboutUs.css'; // Importing external CSS file
import about from '../../assets/about.png';
import { useInView } from 'react-intersection-observer';

const AboutUs = ({ setView }) => {
  const [inView, setInView] = useState(false);
  
  const { ref, inView: isInView } = useInView({
    triggerOnce: false,
    onChange: (inView) => setInView(inView),
    threshold: 0.5,
  });

  // Function to switch to "learnMore" view
  const handleLearnMore = () => {
    setView('learnMore'); // Update the view state to 'learnMore'
  };

  return (
    <div id="about" ref={ref} className={`about-us-container ${isInView ? 'animate' : ''}`}>
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          After immersing ourselves in both French and Arabic cultures, we’ve
          recognized a shared desire to reconnect with authenticity. Rather than
          simply revisiting history, there is a deep appreciation for traditional
          handmade items, organic materials, distinctive craftsmanship, and the
          essence of nature and heritage. Amid the rapid economic growth and
          evolving retail demands, people increasingly seek what is genuine and
          original—hidden treasures that speak to a sense of place and tradition.
        </p>
        
        {/* Learn More Button */}
        <button className="learn-more-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
      <div className="about-us-image">
        <img src={about} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
