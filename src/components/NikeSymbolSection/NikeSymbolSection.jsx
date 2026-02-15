import styles from './NikeSymbolSection.module.css';

const NikeSymbolSection = () => {
  return (
    <section className={styles.nikeSymbolSection}>
      <img 
        src="/assets/images/New folder/nike symbol.avif" 
        alt="Nike Symbol" 
        className={styles.image}
      />
    </section>
  );
};

export default NikeSymbolSection;
