import styles from './BrickCourtSection.module.css';

const BrickCourtSection = () => {
  return (
    <section className={styles.brickCourtSection}>
      <div className={styles.imageContainer}>
        <img 
          src="/assets/images/New folder/Blue shoes.avif" 
          alt="The Brick's In Your Court" 
          className={styles.backgroundImage}
        />
        
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>THE BRICK'S IN<br />YOUR COURT</h1>
            <p className={styles.subtitle}>
              Discover a world of play with experiences all about ball.
            </p>
            <button className={styles.shopButton}>Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrickCourtSection;
