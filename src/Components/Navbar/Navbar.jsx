import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../../assets/i-t&t-1.svg';
import menu from '../../assets/menu-w.png';
import closeIcon from '../../assets/close.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook, faUserGear, faCircleUser, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    if (mobileMenu) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <nav ref={navRef} className={`container2 ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="x" className='logo' />
      <h4 className='nav-fnt'>TechTools Trading India Pvt ltd</h4>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <div className='side-nav'>
          <img src={closeIcon} alt="Close" className='close-menu' onClick={closeMenu} /> {/* Close Button */}
          <li className='nav-icons'>
            <div><FontAwesomeIcon icon={faHouse} /></div>
            <div><Link to='section1' smooth={true} offset={-170} duration={300} onClick={closeMenu}>Home</Link></div>
          </li>
          <li className='nav-icons'>
            <div><FontAwesomeIcon icon={faCircleUser} /></div>
            <div><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About</Link></div>
          </li>
          <li className='nav-icons'>
            <div><FontAwesomeIcon icon={faBoxesStacked} /></div>
            <div><Link to='product' smooth={true} offset={-330} duration={500} onClick={closeMenu}>Product</Link></div>
          </li>
          <li className='nav-icons'>
            <div><FontAwesomeIcon icon={faUserGear} /></div>
            <div><Link to='service' smooth={true} offset={-270} duration={500} onClick={closeMenu}>Service</Link></div>
          </li>
          <li className='nav-icons'>
            <div><FontAwesomeIcon icon={faAddressBook} /></div>
            <div><Link to='contact' smooth={true} offset={-290} duration={500} onClick={closeMenu}>Contact</Link></div>
          </li>
        </div>
      </ul>
      <img src={menu} alt="" className='menu' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
