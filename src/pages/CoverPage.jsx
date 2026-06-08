import { Link } from 'react-router-dom';
import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects';
import Particles from '../components/Particles/Particles';
import styles from './CoverPage.module.css';

const sponsors = [
  { name: 'TV-MK Channel 9', url: 'https://tagger.gambit-rp.com/pages/officialTVMK' },
  { name: 'LS Customs', url: 'https://tagger.gambit-rp.com/pages/LSCustoms' },
  { name: '#FRESHMAN', url: 'https://tagger.gambit-rp.com/pages/freshman' },
];

const IconMagazine = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="12" y2="16" />
  </svg>
);

const IconLabel = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

const IconCharts = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function CoverPage() {
  return (
    <>
      <BackgroundEffects />
      <div className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <Particles count={30} color="var(--accent-gold)" speed={15} />
      <div className={styles.cover}>
        <div className={styles.logo}>FRESHMAN<br/>MEDIA<br/>GROUP</div>
        <p className={styles.tagline}>Музыкальный холдинг Сан-Андреас</p>
        <div className={styles.cards}>
          <Link to="/magazine" className={`${styles.card} ${styles.cardMagazine}`}>
            <span className={styles.cardIcon}><IconMagazine /></span>
            <span className={styles.cardTitle}>#FRESHMAN</span>
            <span className={styles.cardDesc}>Музыкальный журнал</span>
          </Link>
          <Link to="/label" className={`${styles.card} ${styles.cardLabel}`}>
            <span className={styles.cardIcon}><IconLabel /></span>
            <span className={styles.cardTitle}>OLYMPIC SOUND</span>
            <span className={styles.cardDesc}>Лейбл · Студия · Релизы</span>
          </Link>
          <Link to="/charts" className={`${styles.card} ${styles.cardCharts}`}>
            <span className={styles.cardIcon}><IconCharts /></span>
            <span className={styles.cardTitle}>Sanboard</span>
            <span className={styles.cardDesc}>Чарты · Номинации · Зал славы</span>
          </Link>
        </div>
        <div className={styles.sponsors}>
          <span className={styles.sponsorLabel}>При поддержке:</span>
          <div className={styles.sponsorList}>
            {sponsors.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.sponsorLink}>{s.name}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}