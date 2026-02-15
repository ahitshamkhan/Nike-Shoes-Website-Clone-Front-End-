import styles from './CategoryCards.module.css';

const CategoryCards = () => {
  const cards = [
    {
      id: 1,
      image: '/assets/images/phase 7/girl.avif',
      smallHeading: 'Jordan Infrared Collection',
      title: "Leave 'Em On Red",
      alt: 'Jordan Infrared Collection'
    },
    {
      id: 2,
      image: '/assets/images/phase 7/nike-just-do-it (1).avif',
      smallHeading: 'Hollywood Nights and California Dreams',
      title: 'For The City of Stars',
      alt: 'Hollywood Nights Collection'
    }
  ];

  return (
    <section className={styles.categorySection}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img 
              src={card.image} 
              alt={card.alt} 
              className={styles.cardImage}
            />
            
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p className={styles.smallHeading}>{card.smallHeading}</p>
                <h2 className={styles.title}>{card.title}</h2>
                <button className={styles.shopButton}>Shop</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
