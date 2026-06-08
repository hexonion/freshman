import { Link } from 'react-router-dom';
import styles from './SectionNav.module.css';

const IconLabel = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const IconCharts = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function SectionNav() {
  return (
    <div className={styles.nav}>
      <Link to="/label" className={styles.card}>
        <span className={styles.icon}><IconLabel /></span>
        <span className={styles.label}>OLYMPIC SOUND</span>
        <span className={styles.desc}>Лейбл и студия</span>
        <span className={styles.arrow}>→</span>
      </Link>
      <Link to="/charts" className={styles.card}>
        <span className={styles.icon}><IconCharts /></span>
        <span className={styles.label}>Sanboard</span>
        <span className={styles.desc}>Чарты и номинации</span>
        <span className={styles.arrow}>→</span>
      </Link>
    </div>
  );
}