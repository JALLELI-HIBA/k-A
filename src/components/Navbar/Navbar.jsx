import React, { useEffect, useState } from 'react';
import './Navbar.css';
import darkLogo from '../../assets/logo.png'; // Default logo
import logo from '../../assets/logo.png'; // Dark navbar logo
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Track scroll state
  const [showSidebar, setShowSidebar] = useState(false); // Track sidebar visibility
  const [hideNavbar, setHideNavbar] = useState(false); // Track if navbar should be hidden

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const heroRect = heroSection.getBoundingClientRect();
      const contactSection = document.querySelector('.contact');
      const footerSection = document.querySelector('.footer'); // Footer section reference
      
      const contactRect = contactSection.getBoundingClientRect();
      const footerRect = footerSection.getBoundingClientRect(); // Get footer position

      // Trigger navbar change when the hero section has completely scrolled out of view
      setScrolled(heroRect.bottom <= 0);

      // Show the sidebar when the "Contact Us" section is in view, hide it when the section ends
      if (contactRect.top <= window.innerHeight && contactRect.bottom > 0) {
        setShowSidebar(true); // Show sidebar when "Contact Us" starts entering the viewport
      } else {
        setShowSidebar(false); // Hide sidebar when "Contact Us" section is no longer in view
      }

      // Hide the "scrolled" navbar after the "Contact Us" section ends, and until the footer is visible
      if (contactRect.bottom <= 0 || footerRect.top <= window.innerHeight) {
        setHideNavbar(true); // Set the state to hide the navbar
      } else {
        setHideNavbar(false); // Show navbar if "Contact Us" section is still in view
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled && !hideNavbar ? 'scrolled' : ''} ${hideNavbar ? 'hidden' : ''}`}>
      <img 
        src={logo} 
        alt='Logo' 
        className={`logo ${scrolled && !hideNavbar ? 'scrolled-logo' : ''}`} 
      />
      <ul className={`nav-links ${scrolled && !hideNavbar ? 'sidebar' : ''} ${showSidebar ? 'show-sidebar' : ''}`}>
        <li>
          <Link 
            to='hero' 
            smooth={true} 
            offset={0} 
            duration={500}
            spy={true} /* Automatically adds 'active' class when section is in view */
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='story' 
            smooth={true} 
            offset={-260} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Story Behind
          </Link>
        </li>
        <li>
          <Link 
            to='about' 
            smooth={true} 
            offset={-150} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to='services' 
            smooth={true} 
            offset={-260} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Services
          </Link>
        </li>
       
        <li>
          <Link 
            to='contact' 
            smooth={true} 
            offset={-260} 
            duration={500}
            spy={true}
            activeClass="active"
            className={`${!scrolled ? 'btn' : ''}`} // Conditionally add btn class
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
