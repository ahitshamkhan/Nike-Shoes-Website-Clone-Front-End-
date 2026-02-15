import styles from './GreatnessSection.module.css';

const GreatnessSection = () => {
  return (
    <section className={styles.greatnessSection}>
      <h1 className={styles.title}>GENERATIONAL GREATNESS</h1>
      <p className={styles.subtitle}>All or Everything. Greatness is never satisfied.</p>
      
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Explore</button>
        <button className={styles.button}>Shop</button>
      </div>
    </section>
  );
};

export default GreatnessSection;
