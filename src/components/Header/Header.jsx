import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);
  const isActive = (path) => location.pathname.startsWith(path) ? styles.active : '';

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>FMG</Link>
        <div className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`} onClick={() => setMenuOpen(p => !p)}>
          <span /><span /><span />
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link to="/magazine" className={isActive('/magazine')} onClick={close}>#FRESHMAN</Link>
          <Link to="/label" className={isActive('/label')} onClick={close}>OLYMPIC SOUND</Link>
          <Link to="/charts" className={isActive('/charts')} onClick={close}>Sanboard</Link>
          <Link to="/magazine/events" className={`${styles.navHighlight} ${isActive('/magazine/events')}`} onClick={close}>Афиша</Link>
        </nav>
      </div>
    </header>
  );
}