import styles from './RedGirlsSection.module.css';

const RedGirlsSection = () => {
  return (
    <section className={styles.redGirlsSection}>
      <img 
        src="/assets/images/New folder/red girls.avif" 
        alt="Red Girls" 
        className={styles.image}
      />
    </section>
  );
};

export default RedGirlsSection;
