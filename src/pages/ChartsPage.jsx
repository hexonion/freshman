import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Charts from '../components/Charts/Charts';
import HallOfFame from '../components/HallOfFame/HallOfFame';
import Particles from '../components/Particles/Particles';
import { ecosystem } from '../data/ecosystem';
import bgCharts from '/images/bg-charts.jpg';
import styles from './ChartsPage.module.css';

export default function ChartsPage() {
  return (
    <>
      <BackgroundEffects />
      <div className={styles.bgImage} style={{ backgroundImage: `url(${bgCharts})` }} />
      <div className={styles.bgOverlay} />
      <Particles count={40} color="var(--sanboard-gold)" speed={18} />
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Sanboard</h1>
          <p className={styles.subtitle}>Музыкальные чарты, зал славы и номинации</p>
        </div>
        <Charts top10={ecosystem.charts.top10.slice(0, 5)} />
        <HallOfFame items={ecosystem.charts.hallOfFame} />
      </main>
      <Footer />
    </>
  );
}