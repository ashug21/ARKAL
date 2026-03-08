"use client"

import React, { useState } from 'react';
import Link from "next/link";
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
        
        <div className={styles.logo}>
          <span className={styles.logoText}>ArKal</span>
          <span className={styles.logoDot}>.</span>
        </div>

        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
              <span className={styles.underline}></span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
              <span className={styles.underline}></span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/enquiry" className={styles.navLink}>
              Enquiry
              <span className={styles.underline}></span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/portfolio" className={styles.navLink}>
              Portfolio
              <span className={styles.underline}></span>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
              <span className={styles.underline}></span>
            </Link>
          </li>
        </ul>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <span className={styles.ctaText}>Get Started</span>
            <svg className={styles.ctaIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

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

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMobileMenu}>About</Link></li>
          <li><Link href="/enquiry" onClick={toggleMobileMenu}>Enquiry</Link></li>
          <li><Link href="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
          <li><Link href="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
        <button className={styles.mobileCta}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;