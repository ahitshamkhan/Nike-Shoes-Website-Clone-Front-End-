import styles from './FooterBar.module.css';

const FooterBar = () => {
  const links = [
    { id: 1, text: 'Find a Store', href: '#' },
    { id: 2, text: 'Help', href: '#' },
    { id: 3, text: 'Join Us', href: '#' },
    { id: 4, text: 'Sign In', href: '#' }
  ];

  return (
    <footer className={styles.footerBar}>
      <div className={styles.linksContainer}>
        {links.map((link) => (
          <a key={link.id} href={link.href} className={styles.link}>
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default FooterBar;
