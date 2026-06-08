import BackgroundEffects from '../components/BackgroundEffects/BackgroundEffects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Events from '../components/Events/Events';
import { ecosystem } from '../data/ecosystem';
import styles from './EventsPage.module.css';

export default function EventsPage() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Афиша</h1>
        <p className={styles.subtitle}>Мероприятия FMG, партнеров, концерты и просто крутые тусовки!</p>
        <Events events={ecosystem.events} />
      </main>
      <Footer />
    </>
  );
}