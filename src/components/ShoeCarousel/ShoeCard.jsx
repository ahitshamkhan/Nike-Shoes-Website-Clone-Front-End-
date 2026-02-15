import styles from './ShoeCard.module.css';

const ShoeCard = ({ shoe }) => {
  return (
    <div className={styles.shoeCard}>
      {/* Logo at top */}
      <div className={styles.logoContainer}>
        <img src={shoe.logo} alt={`${shoe.name} logo`} className={styles.logo} />
      </div>
      
      {/* Shoe Image */}
      <div className={styles.imageContainer}>
        <img src={shoe.image} alt={shoe.name} className={styles.shoeImage} />
      </div>
      
      {/* Shoe Name */}
      <div className={styles.shoeInfo}>
        <h3 className={styles.shoeName}>{shoe.name}</h3>
      </div>
    </div>
  );
};

export default ShoeCard;
