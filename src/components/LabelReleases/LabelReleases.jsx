import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './LabelReleases.module.css';

export default function LabelReleases({ releases }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Последние релизы</h2>
      <div className={styles.grid}>
        {releases.map((rel, i) => (
          <div key={rel.id} className={styles.card} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={styles.cover}>
              <img src={rel.cover} alt={rel.title} />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>{rel.title}</div>
              <div className={styles.artist}>{rel.artist}</div>
              <div className={styles.meta}>
                <span className={styles.type}>{rel.type}</span>
                <span>{rel.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}