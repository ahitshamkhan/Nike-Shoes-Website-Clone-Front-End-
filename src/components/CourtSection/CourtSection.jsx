import styles from './CourtSection.module.css';

const CourtSection = () => {
  return (
    <section className={styles.courtSection}>
      <div className={styles.imageContainer}>
        {/* Three images side by side */}
        <img 
          src="/assets/images/phase 4.5/men-s-shoes-clothing-accessories.avif" 
          alt="Basketball player 1" 
          className={styles.backgroundImage}
        />
        <img 
          src="/assets/images/phase 4.5/men-s-shoes-clothing-accessories (1).avif" 
          alt="Basketball player 2" 
          className={styles.backgroundImage}
        />
        <img 
          src="/assets/images/phase 4.5/men-s-shoes-clothing-accessories (2).avif" 
          alt="Basketball player 3" 
          className={styles.backgroundImage}
        />
        
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.title}>TAKE OVER THE COURT</h2>
            <p className={styles.subtitle}>Make a name and disrupt traditional gameplay.</p>
            <button className={styles.shopButton}>Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtSection;
