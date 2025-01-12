import React, { useState } from 'react';
import './AboutUs.css'; // Importing external CSS file
import about from '../../assets/about.png';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [inView, setInView] = useState(false);

  // Use IntersectionObserver to track when the component is in view
  const { ref, inView: isInView } = useInView({
    triggerOnce: false,  // Ensures the animation triggers every time it's in view
    onChange: (inView) => setInView(inView), // Update state when section is in view
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  return (
    <div
      ref={ref}
      className={`about-us-container ${isInView ? 'animate' : ''}`}
    >
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
        <p>
          Our mission is to bridge markets and connect discerning buyers with
          unique, high-quality items that stand out in their authenticity and
          excellence. With a commitment to reliability, ethical practices, and
          unmatched service, K&A is your trusted partner in bringing the world’s
          finest products to global markets.
        </p>
      </div>
      <div className="about-us-image">
        <img src={about} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
