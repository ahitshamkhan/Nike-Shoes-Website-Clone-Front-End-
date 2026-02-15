import styles from './Basketball.module.css';

const Basketball = () => {
  return (
    <section className={styles.basketballSection}>
      <div className={styles.container}>
        {/* Nike Swoosh Logo */}
        <svg className={styles.nikeLogo} viewBox="0 0 69 32" fill="currentColor">
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.4 7.52Q13.6 19 18.4 16.4l50.16-21.44q.4-.16.24.56-.16.8-.24 1.2v7.28z"></path>
        </svg>
        
        {/* Basketball Heading */}
        <h2 className={styles.heading}>Basketball</h2>
      </div>
    </section>
  );
};

export default Basketball;