import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <svg 
        className={styles.searchIcon}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
    </form>
  );
};

export default SearchBar;