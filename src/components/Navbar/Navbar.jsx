"use client"

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>ArKal</span>
          <span className={styles.logoDot}>.</span>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#home" className={styles.navLink}>
              Home
              <span className={styles.underline}></span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink}>
              About
              <span className={styles.underline}></span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink}>
            Enquiry
              <span className={styles.underline}></span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#portfolio" className={styles.navLink}>
              Portfolio
              <span className={styles.underline}></span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink}>
              Contact
              <span className={styles.underline}></span>
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <span className={styles.ctaText}>Get Started</span>
            <svg className={styles.ctaIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMobileMenu}>Enquiry</a></li>
          <li><a href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
        </ul>
        <button className={styles.mobileCta}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
