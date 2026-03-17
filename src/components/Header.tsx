'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const menuItems = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' },
  { name: 'Case Study', url: '/case-study' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <Image 
              src="/images/logo.png" 
              alt="Sahajanand Digital" 
              width={200} 
              height={50} 
              className="img-fluid"
              priority
            />
          </Link>

          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <button className={styles.closeButton} onClick={closeMenu} aria-label="Close Menu">
              <i className="fas fa-times"></i>
            </button>
            {menuItems.map((item) => (
              <li key={item.name} className={styles.menuItem}>
                <Link 
                  href={item.url} 
                  className={styles.menuLink}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className={styles.mobileActions}>
              <Link href="/contact" className="btn btn-sm btn-primary" onClick={closeMenu}>
                Get Started
              </Link>
            </li>
          </ul>

          <div className={styles.navActions}>
            <button 
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-sm btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );

};

export default Header;
