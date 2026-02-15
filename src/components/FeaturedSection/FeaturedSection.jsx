import styles from './FeaturedSection.module.css';

const FeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.imageContainer}>
        <img 
          src="/assets/images/phase 7/just do.avif" 
          alt="Beyond the Court" 
          className={styles.backgroundImage}
        />
        
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.title}>BEYOND THE COURT</h2>
            <p className={styles.subtitle}>
              Take your cutthroat conviction off the court with styles that show you're unshakable.
            </p>
            <button className={styles.exploreButton}>Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
