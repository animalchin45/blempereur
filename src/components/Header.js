import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { flowerHeader } from '../img/index';

const Header = () => {
  // Header logo and background states
  const [headerLogo, setHeaderLogo] = useState(false);
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(false);
  // Page location variable
  const location = useLocation();
  // Settings for on / off states of header background
  const colorOff = {
    backgroundImage:
      'linear-gradient(90deg, rgba(173,214,225,0) 25%, rgba(173,214,225,0) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
  };
  const colorOn = {
    boxShadow: '0 1px 2px rgba(13, 20, 9, 1)',
    backgroundImage: `linear-gradient(90deg, rgba(173,214,225,1) 25%, rgba(173,214,225,0) 100%), url(${flowerHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
  };

  useEffect(() => {
    // When page scroll position is further than 350 pixles apply changes to header
    if (location.pathname === '/') {
      function showHeaderLogo() {
        if (window.scrollY >= 350) {
          setHeaderLogo(true);
          setHeaderBackgroundColor(true);
        } else {
          setHeaderLogo(false);
          setHeaderBackgroundColor(false);
        }
      }
      setHeaderLogo(false);
      setHeaderBackgroundColor(false);
      window.addEventListener('scroll', showHeaderLogo, true);
      return () => {
        window.removeEventListener('scroll', showHeaderLogo, true);
      };
    } else {
      setHeaderLogo(true);
      setHeaderBackgroundColor(true);
    }
  }, [location.pathname]);

  return (
    <div className='header' style={headerBackgroundColor ? colorOn : colorOff}>
      <div
        className='header__logo'
        style={headerLogo ? { opacity: 1 } : { opacity: 0 }}
      >
        <Link to='/'>
          <h1>Barbara Lempereur</h1>
          <h2>Unified Therapist</h2>
        </Link>
      </div>
      <nav className='header__nav'>
        <NavLink
          activeClassName='btn__nav--active'
          className='btn__nav'
          to='/unified-therapy'
        >
          Unified Therapy Process
        </NavLink>
        <NavLink
          activeClassName='btn__nav--active'
          className='btn__nav'
          to='/newclients'
        >
          New Clients
        </NavLink>
        <NavLink
          activeClassName='btn__nav--active'
          className='btn__nav'
          to='/aboutme'
        >
          About Me
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
