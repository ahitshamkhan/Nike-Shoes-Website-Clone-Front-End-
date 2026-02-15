import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h1 className={styles.ctaTitle}>WARNING LABEL PACK</h1>
        <h2 className={styles.ctaSubtitle}>
          Show them your true nature when you step on the court.
        </h2>
        <button className={styles.ctaButton}>Explore</button>
      </div>
    </section>
  );
};

export default CallToAction;
