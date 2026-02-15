import styles from './MainFooter.module.css';

const MainFooter = () => {
  const columns = [
    {
      id: 1,
      title: 'Resources',
      links: [
        { id: 1, text: 'Gift Cards', href: '#' },
        { id: 2, text: 'Find a Store', href: '#' },
        { id: 3, text: 'Membership', href: '#' },
        { id: 4, text: 'Nike Journal', href: '#' },
        { id: 5, text: 'Site Feedback', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Help',
      links: [
        { id: 1, text: 'Get Help', href: '#' },
        { id: 2, text: 'Order Status', href: '#' },
        { id: 3, text: 'Shipping and Delivery', href: '#' },
        { id: 4, text: 'Returns', href: '#' },
        { id: 5, text: 'Order Cancellation', href: '#' },
        { id: 6, text: 'Payment Options', href: '#' },
        { id: 7, text: 'Gift Card Balance', href: '#' },
        { id: 8, text: 'Contact Us', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Company',
      links: [
        { id: 1, text: 'About Nike', href: '#' },
        { id: 2, text: 'News', href: '#' },
        { id: 3, text: 'Careers', href: '#' },
        { id: 4, text: 'Investors', href: '#' },
        { id: 5, text: 'Purpose', href: '#' },
        { id: 6, text: 'Sustainability', href: '#' },
        { id: 7, text: 'Accessibility', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Promotions & Discounts',
      links: [
        { id: 1, text: 'Student', href: '#' },
        { id: 2, text: 'Military', href: '#' },
        { id: 3, text: 'Teacher', href: '#' },
        { id: 4, text: 'First Responders & Medical Professionals', href: '#' },
        { id: 5, text: 'Birthday', href: '#' }
      ]
    }
  ];

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.topSection}>
        {columns.map((column) => (
          <div key={column.id} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link.id} href={link.href} className={styles.link}>
                {link.text}
              </a>
            ))}
          </div>
        ))}
        
        <div className={styles.locationSelector}>
          <span className={styles.locationIcon}>🌐</span>
          <span>United States</span>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copyright}>© 2026 Nike, Inc. All Rights Reserved</p>
        
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Guides</a>
          <a href="#" className={styles.legalLink}>Terms of Sale</a>
          <a href="#" className={styles.legalLink}>Terms of Use</a>
          <a href="#" className={styles.legalLink}>Nike Privacy Policy</a>
          <a href="#" className={styles.legalLink}>
            <span>🔒</span> Your Privacy Choices
          </a>
          <a href="#" className={styles.legalLink}>CA Supply Chains Act</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
