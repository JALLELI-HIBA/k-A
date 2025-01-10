import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Sets sticky to true if scrollY > 50
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
const [mobileMenu , setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='Logo' className='logo' />
      <ul className='nav-links'>
        <li><Link to='hero'  smooth={true} offset={0} duration={500} > Home</Link> </li>
        <li><Link to='program'  smooth={true} offset={-260} duration={500} >Program </Link></li>
        <li><Link to='about'  smooth={true} offset={-150} duration={500} >About Us </Link></li>
        <li> <Link to='campus'  smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li><Link to='testimonials'  smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
        <li>
          <Link to='contact'  smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
