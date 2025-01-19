import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../components/footer.json'; // Ensure the path to your Lottie JSON file is correct
import './Footer.css';
import logo from '../../assets/logo.png';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Lottie Animation in Center */}
        <div className="footer-animation">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '250px', width: '350px' }}
          />
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          <img className="footer-logo" src={logo} alt=" logo " />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ETOILES ET SABLES. All Rights Reserved.</p>
      </div>
    </div>
  );
}
