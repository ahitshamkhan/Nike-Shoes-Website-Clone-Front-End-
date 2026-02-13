import { useState } from 'react';
import styles from './Navbar.module.css';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [cartCount] = useState(3); // Mock cart count
  const [wishlistCount] = useState(5); // Mock wishlist count

  const navLinks = [
    { name: 'Men', href: '#men' },
    { name: 'Women', href: '#women' },
    { name: 'Kids', href: '#kids' },
    { name: 'Jordan', href: '#jordan' },
    { name: 'NikeSKIMS', href: '#nikeskims' },
    { name: 'Sport', href: '#sport' },
    { name: 'Sale', href: '#sale', highlight: true }
  ];

  return (
    <nav className={`sticky top-0 z-50 flex justify-between items-center px-8 py-4 ${styles.navbar}`}>
      {/* Left - Nike Logo */}
      <div className={styles.logoContainer}>
        <a href="#" className={styles.logoLink}>
          <svg className={styles.nikeLogo} viewBox="0 0 69 32" fill="currentColor">
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.4 7.52Q13.6 19 18.4 16.4l50.16-21.44q.4-.16.24.56-.16.8-.24 1.2v7.28z"></path>
          </svg>
        </a>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex items-center gap-5">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`${styles.navLink} ${link.highlight ? styles.saleLink : ''}`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right - Search, Wishlist, Cart */}
      <div className="flex items-center gap-3">
        <SearchBar />
        
        {/* Wishlist Icon */}
        <button className={styles.iconButton} aria-label="Wishlist">
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Cart Icon */}
        <button className={styles.iconButton} aria-label="Shopping Cart">
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;