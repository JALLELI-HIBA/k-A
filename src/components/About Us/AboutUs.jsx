import React, { useState } from 'react';
import './AboutUs.css'; // Importing external CSS file
import about from '../../assets/about.png';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [inView, setInView] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: false,
    onChange: (inView) => setInView(inView),
    threshold: 0.5,
  });

  return (
    <>
      <div  id="about" ref={ref} className={`about-us-container ${isInView ? 'animate' : ''}`}>
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
        </div>
        <div className="about-us-image">
          <img src={about} alt="About Us" />
        </div>
      </div>

      <div className="about-us-points">
        
        <div className="point-container">
          <div className="circle">1</div>
          <div className="line"></div>
          <div className="point-text">
            <strong>Mission Statement:</strong>
            <br />
            Our mission is to bridge markets and connect discerning buyers with unique,
            high-quality items that stand out in their authenticity and excellence.
          </div>
        </div>

        <div className="point-container">
          <div className="circle">2</div>
          <div className="line"></div>
          <div className="point-text">
            <strong>Core Values:</strong>
            <br />
            We are committed to reliability, ethical practices, and unmatched service.
          </div>
        </div>

        <div className="point-container">
          <div className="circle">3</div>
          <div className="point-text">
            <strong>Promise to Clients:</strong>
            <br />
            K&A is your trusted partner in bringing the world’s finest products
            to global markets.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
