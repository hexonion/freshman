import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import LabelArtists from '../components/LabelArtists/LabelArtists';
import LabelReleases from '../components/LabelReleases/LabelReleases';
import { ecosystem } from '../data/ecosystem';
import bgLabel from '/images/bg-label.jpg';
import styles from './LabelPage.module.css';

export default function LabelPage() {
  return (
    <>
      <BackgroundEffects />
      <div className={styles.bgImage} style={{ backgroundImage: `url(${bgLabel})` }} />
      <div className={styles.bgOverlay} />
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>{ecosystem.label.name}</h1>
          <p className={styles.subtitle}>{ecosystem.label.description}</p>
          <span className={styles.founded}>{ecosystem.label.founded}</span>
        </div>
        <LabelArtists artists={ecosystem.label.artists} />
        <LabelReleases releases={ecosystem.label.releases} />

        <div className={styles.about}>
          <h2 className={styles.aboutTitle}>О НАС</h2>
          <p className={styles.aboutText}>
            OLYMPIC SOUND — независимый звукозаписывающий лейбл и дистрибьютор основанный в 2025 году.
            Специализируется на альтернативной и рок-музыке. Миссия лейбла — дать артистам свободу, которую не даёт остальная часть индустрии.
          </p>
          <div className={styles.contacts}>
            <span className={styles.contactPhone}>📞 10-00-18</span>
            <a href="https://tagger.gambit-rp.com/silvain" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              СВЯЗАТЬСЯ С НАМИ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}