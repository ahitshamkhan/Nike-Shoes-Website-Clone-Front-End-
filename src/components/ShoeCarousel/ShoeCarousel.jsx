import { useRef } from 'react';
import styles from './ShoeCarousel.module.css';
import ShoeCard from './ShoeCard';

const ShoeCarousel = () => {
  const scrollRef = useRef(null);

  // Shoe data with matching logos
  const shoes = [
    {
      id: 1,
      name: 'Ja 3',
      logo: '/assets/images/shoes/Gemini_Generated_Image_llj0mvllj0mvllj0.png',
      image: '/assets/images/shoes/JA+3.avif'
    },
    {
      id: 2,
      name: 'Freak 7',
      logo: '/assets/images/shoes/freek 7.png',
      image: '/assets/images/shoes/GIANNIS+FREAK+7.avif'
    },
    {
      id: 3,
      name: 'Sabrina 3',
      logo: '/assets/images/shoes/sabrina.png',
      image: '/assets/images/shoes/SABRINA+3.avif'
    },
    {
      id: 4,
      name: "A'One",
      logo: "/assets/images/shoes/A'one.png",
      image: "/assets/images/shoes/A'ONE.avif"
    },
    {
      id: 5,
      name: 'KD18 GI',
      logo: '/assets/images/shoes/KD18+GI.png',
      image: '/assets/images/shoes/KD18+GI.avif'
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
