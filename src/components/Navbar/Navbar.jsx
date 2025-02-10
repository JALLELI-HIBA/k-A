import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Dark navbar logo
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        // Check if the page has scrolled past the hero section
        setScrolled(window.scrollY > heroSection.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''}`}>
      <img 
        src={logo} 
        alt='Logo' 
        className='logo' 
      />
      <ul>
        <li>
          <Link 
            to='hero' 
            smooth={true} 
            offset={0} 
            duration={500}
            spy={true} 
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
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
