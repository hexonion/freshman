import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Events.module.css';

const tagClass = {
  concert: 'tagConcert',
  party: 'tagParty',
  auto: 'tagAuto',
  fest: 'tagFest',
};

export default function Events({ events }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.list} ${isVisible ? styles.visible : ''}`}>
      {events.map((event, i) => (
        <div key={event.id} className={styles.item} style={{ transitionDelay: `${i * 0.08}s` }}>
          <div className={styles.date}>
            <span className={styles.day}>{event.day}</span>
            <span className={styles.month}>{event.month}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{event.name}</div>
            <div className={styles.venue}>{event.venue}</div>
          </div>
          <span className={`${styles.tag} ${styles[tagClass[event.tagType]] || ''}`}>{event.tag}</span>
        </div>
      ))}
    </div>
  );
}