import styles from './FooterNav.module.css';

const FooterNav = () => {
  const columns = [
    {
      id: 1,
      title: 'Featured',
      links: [
        { id: 1, text: 'Air Force 1', href: '#' },
        { id: 2, text: 'Jordan 1', href: '#' },
        { id: 3, text: 'Air Max Dn', href: '#' },
        { id: 4, text: 'Vomero', href: '#' }
      ]
    },
    {
      id: 2,
      title: 'Shoes',
      links: [
        { id: 1, text: 'All Shoes', href: '#' },
        { id: 2, text: 'Jordan Shoes', href: '#' },
        { id: 3, text: 'Running Shoes', href: '#' },
        { id: 4, text: 'Basketball Shoes', href: '#' }
      ]
    },
    {
      id: 3,
      title: 'Clothing',
      links: [
        { id: 1, text: 'All Clothing', href: '#' },
        { id: 2, text: 'Tops & T-Shirts', href: '#' },
        { id: 3, text: 'Shorts', href: '#' },
        { id: 4, text: 'Hoodies & Pullovers', href: '#' }
      ]
    },
    {
      id: 4,
      title: 'Kids',
      links: [
        { id: 1, text: 'Infant & Toddler Shoes', href: '#' },
        { id: 2, text: 'Kids Shoes', href: '#' },
        { id: 3, text: 'Kids Basketball Shoes', href: '#' },
        { id: 4, text: 'Kids Running Shoes', href: '#' }
      ]
    }
  ];

  return (
    <nav className={styles.footerNav}>
      <div className={styles.columnsContainer}>
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
      </div>
    </nav>
  );
};

export default FooterNav;
