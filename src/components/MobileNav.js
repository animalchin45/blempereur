import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Social from './Social'

const MobileNav = () => {
    // Mobile menu state and animation position
    const [hamburgerClass, setHamburgerClass] = useState(`hamburger hamburger--spring`)
    const [mobileNavLinksClass, setMobileNavLinksClass] = useState({
        opacity: 0,
        left: '-1200px'
    })

    // Hamburger Menu close on click
    const handleMenuClick = () => {
        setHamburgerClass(`hamburger hamburger--spring`)
        setMobileNavLinksClass({
            opacity: 0,
            left: '-1200px'
        })
    }

    // Hamburger open / close
    const handleHamburgerClick = () => {
        if (hamburgerClass === `hamburger hamburger--spring`) {
            setHamburgerClass(`hamburger hamburger--spring is-active`)
            setMobileNavLinksClass({
                opacity: 1,
                left: '0'
            })
        } else {
            setHamburgerClass(`hamburger hamburger--spring`)
            setMobileNavLinksClass({
                opacity: 0,
                left: '-1200px'
            })
        }
    }

    return (
        <div className="mobile-nav">
            <nav className="mobile-nav__links" onClick={() => handleMenuClick()} style={mobileNavLinksClass}>
                <Link to="/unified-therapy">Unified Therapy Process</Link>
                <Link to="/services">Services</Link>
                <Link to="/newclients">New Clients</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/team">Unified Therapy Team</Link>
                <Social />
                <a className='p-link' href="mailto:barbara@blempereur.com">barbara@blempereur.com</a>
                <a className='p-link' href='http://eepurl.com/hHA2NP'>Join my newsletter</a>
            </nav> 
            <button className={hamburgerClass} onClick={() => handleHamburgerClick()} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
        
    )
}

export default MobileNav