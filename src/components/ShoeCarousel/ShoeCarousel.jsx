import { useRef } from 'react';
import styles from './ShoeCarousel.module.css';
import ShoeCard from './ShoeCard';

const ShoeCarousel = () => {
  const scrollRef = useRef(null);

  // All shoe images from the folder
  const shoes = [
    {
      id: 1,
      name: 'Sabrina 3',
      image: '/assets/images/shoes/nike-just-do-it.avif'
    },
    {
      id: 2,
      name: 'Sabrina 3',
      image: '/assets/images/shoes/nike-just-do-it (1).avif'
    },
    {
      id: 3,
      name: "A'One",
      image: '/assets/images/shoes/nike-just-do-it (2).avif'
    },
    {
      id: 4,
      name: 'KD18',
      image: '/assets/images/shoes/nike-just-do-it (3).avif'
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContainer}>
        <h2 className={styles.sectionTitle}>Shop the Collection</h2>
        
        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button
            className={`${styles.arrowButton} ${styles.leftArrow}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Shoe Cards Container */}
          <div ref={scrollRef} className={styles.carouselScroll}>
            {shoes.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={`${styles.arrowButton} ${styles.rightArrow}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoeCarousel;
