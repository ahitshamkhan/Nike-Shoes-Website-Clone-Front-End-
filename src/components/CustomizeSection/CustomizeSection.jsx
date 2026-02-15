import styles from './CustomizeSection.module.css';

const CustomizeSection = () => {
  const categories = [
    {
      id: 1,
      image: '/assets/images/phase 9/nike-just-do-it.avif',
      title: 'Nike Basketball',
      alt: 'Nike Basketball',
      hasWhiteBg: false
    },
    {
      id: 2,
      image: '/assets/images/phase 9/nike-just-do-it (1).avif',
      title: 'Converse By You',
      alt: 'Converse By You',
      hasWhiteBg: true
    },
    {
      id: 3,
      image: '/assets/images/phase 9/nike-just-do-it (2).avif',
      title: 'Nike Sportswear',
      alt: 'Nike Sportswear',
      hasWhiteBg: false
    }
  ];

  return (
    <section className={styles.customizeSection}>
      <h2 className={styles.heading}>Customize Nike By You</h2>
      
      <div className={styles.cardsContainer}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={`${styles.imageWrapper} ${category.hasWhiteBg ? styles.whiteBg : ''}`}>
              <img 
                src={category.image} 
                alt={category.alt} 
                className={styles.cardImage}
              />
            </div>
            <h3 className={styles.cardTitle}>{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomizeSection;
