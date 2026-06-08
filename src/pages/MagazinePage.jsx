import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TrackOfWeek from '../components/TrackOfWeek/TrackOfWeek';
import Interview from '../components/Interview/Interview';
import StreetVoice from '../components/StreetVoice/StreetVoice';
import SectionNav from '../components/SectionNav/SectionNav';
import { ecosystem } from '../data/ecosystem';
import bgMagazine from '/images/bg-magazine.jpg';
import styles from './MagazinePage.module.css';

export default function MagazinePage() {
  return (
    <>
      <BackgroundEffects />
      <div className={styles.bgImage} style={{ backgroundImage: `url(${bgMagazine})` }} />
      <div className={styles.bgOverlay} />
      <Header />
      <main className={styles.main}>
        <div className={styles.issue}>
          <div className={styles.issueLeft}>
            <span className={styles.issueHash}>#</span>
            <span className={styles.issueNum}>{ecosystem.magazine.issue}</span>
          </div>
          <div className={styles.issueRight}>
            <span className={styles.issueLabel}>Выпуск</span>
            <span className={styles.issueDate}>{ecosystem.magazine.date}</span>
          </div>
        </div>
        <TrackOfWeek track={ecosystem.magazine.track} />
        <Interview data={ecosystem.magazine.interview} />
        <StreetVoice items={ecosystem.magazine.streetVoice} />
        <SectionNav />
      </main>
      <Footer />
    </>
  );
}