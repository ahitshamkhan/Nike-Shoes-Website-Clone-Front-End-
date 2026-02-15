import styles from './ShopKids.module.css';

const ShopKids = () => {
  const categories = [
    {
      id: 1,
      image: '/assets/images/phase 11/child 1.avif',
      title: 'Tops',
      alt: 'Kids Tops'
    },
    {
      id: 2,
      image: '/assets/images/phase 11/child 2.avif',
      title: 'Accessories',
      alt: 'Kids Accessories'
    },
    {
      id: 3,
      image: '/assets/images/phase 11/child 3.avif',
      title: 'Bottoms',
      alt: 'Kids Bottoms'
    }
  ];

  return (
    <section className={styles.shopKidsSection}>
      <h2 className={styles.heading}>Shop Kids</h2>
      
      <div className={styles.cardsContainer}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src={category.image} 
                alt={category.alt} 
                className={styles.cardImage}
              />
              <button className={styles.categoryButton}>{category.title}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopKids;
