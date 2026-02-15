import styles from './AthleteCard.module.css';

const AthleteCard = ({ athlete }) => {
  return (
    <div className={styles.athleteCard}>
      <div className={styles.imageContainer}>
        <img src={athlete.image} alt={athlete.name} className={styles.athleteImage} />
        <div className={styles.nameOverlay} style={{ color: athlete.nameColor }}>
          {athlete.name.toUpperCase()}
        </div>
      </div>
      <p className={styles.athleteName}>{athlete.name}</p>
    </div>
  );
};

export default AthleteCard;