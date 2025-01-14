import React, { useEffect, useState } from 'react';
import './Navbar.css';
import darkLogo from '../../assets/logo.png'; // Default logo
import logo from '../../assets/darklogo.png'; // Dark navbar logo
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Track scroll state
  const [heroHeight, setHeroHeight] = useState(0); // To store hero section height

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroRect = heroSection.getBoundingClientRect();

      // Trigger navbar change when the hero section has completely scrolled out of view
      setScrolled(heroRect.bottom <= 0);
    };

    const heroSection = document.querySelector('.hero');
    setHeroHeight(heroSection.offsetHeight); // Set the height of the hero section

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggle mobile menu state
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img 
        src={logo} 
        alt='Logo' 
        className={`logo ${scrolled ? 'scrolled-logo' : ''}`} 
      />
      <ul className={`nav-links ${scrolled ? 'sidebar' : ''}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
