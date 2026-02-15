import { useRef } from 'react';
import styles from './ShopByAthlete.module.css';
import AthleteCard from './AthleteCard';

const ShopByAthlete = () => {
  const scrollRef = useRef(null);

  // Athlete data based on the screenshots
  const athletes = [
    {
      id: 1,
      name: 'Luka',
      image: '/assets/images/athletes/nike-just-do-it.avif',
      nameColor: '#FF0000' // Red
    },
    {
      id: 2,
      name: 'Giannis',
      image: '/assets/images/athletes/nike-just-do-it (1).avif',
      nameColor: '#C8FF00' // Yellow-green
    },
    {
      id: 3,
      name: "A'ja",
      image: '/assets/images/athletes/nike-just-do-it (2).avif',
      nameColor: '#FF1493' // Pink
    },
    {
      id: 4,
      name: 'KD',
      image: '/assets/images/athletes/nike-just-do-it (3).avif',
      nameColor: '#00FF7F' // Green
    },
    {
      id: 5,
      name: 'Ja',
      image: '/assets/images/athletes/nike-just-do-it (4).avif',
      nameColor: '#1E90FF' // Blue
    },
    {
      id: 6,
      name: 'Sabrina',
      image: '/assets/images/athletes/nike-just-do-it (5).avif',
      nameColor: '#98FF98' // Light green
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
    <section className={styles.athleteSection}>
      <div className={styles.athleteContainer}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Shop By Athlete</h2>
          <div className={styles.arrowButtons}>
            <button
              className={styles.arrowButton}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className={styles.arrowButton}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className={styles.athleteScroll}>
          {athletes.map((athlete) => (
            <AthleteCard key={athlete.id} athlete={athlete} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByAthlete;