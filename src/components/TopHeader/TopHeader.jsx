import { useState } from 'react';
import styles from './TopHeader.module.css';

const TopHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn] = useState(true); // Mock login state
  const [username] = useState('John Doe'); // Mock username

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`flex justify-between items-center px-8 py-2 ${styles.topHeader}`}>
      {/* Left Section - Brand Logos */}
      <div className="flex items-center gap-4">
        <a href="#" className={styles.brandLink}>
          <img 
            src="/assets/icons/Air-Jordan-emblem.jpg" 
            alt="Jordan" 
            className={styles.jordanLogo}
          />
        </a>
        <div className={styles.divider}></div>
        <a href="#" className={styles.brandLink}>
          <img 
            src="/assets/icons/converse-brand-symbol-shoes-logo-white-design-illustration-with-black-background-free-vector.jpg" 
            alt="Converse" 
            className={styles.converseLogo}
          />
        </a>
      </div>

      {/* Right Section - Utility Links */}
      <div className="flex items-center gap-4 text-xs">
        <a href="#" className={styles.utilityLink}>
          Find a Store
        </a>
        <div className={styles.divider}></div>
        <a href="#" className={styles.utilityLink}>
          Help
        </a>
        <div className={styles.divider}></div>
        
        {/* Conditional rendering based on login state */}
        {isLoggedIn ? (
          <>
            <span className={styles.username}>Hi, {username}</span>
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className={styles.accountButton}
                aria-label="Account menu"
              >
                <svg 
                  className={styles.accountIcon} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </button>

              {/* Account Dropdown */}
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  <a href="#" className={styles.dropdownItem}>
                    Profile
                  </a>
                  <a href="#" className={styles.dropdownItem}>
                    Settings
                  </a>
                  <div className={styles.dropdownDivider}></div>
                  <a href="#" className={styles.dropdownItem}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <a href="#" className={styles.utilityLink}>
            Sign In
          </a>
        )}
      </div>
    </header>
  );
};

export default TopHeader;