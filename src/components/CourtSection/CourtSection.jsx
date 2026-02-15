import styles from './CourtSection.module.css';

const CourtSection = () => {
  return (
    <section className={styles.courtSection}>
      <div className={styles.imageContainer}>
        {/* Single full-width image */}
        <img 
          src="/assets/images/phase 4.5/nike-just-do-it (6).avif" 
          alt="Basketball players" 
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
