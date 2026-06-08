import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Charts.module.css';

export default function Charts({ top10 }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Топ-5 недели</h2>
      <div className={styles.list}>
        {top10.map((track, i) => {
          const change = track.lastWeek - track.position;
          let arrow = '–';
          let arrowClass = styles.arrowNeutral;
          if (change > 0) { arrow = '▲'; arrowClass = styles.arrowUp; }
          if (change < 0) { arrow = '▼'; arrowClass = styles.arrowDown; }

          return (
            <div key={track.position} className={styles.row} style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className={styles.pos}>{track.position}</span>
              <div className={styles.cover}>
                <img src={track.cover} alt={track.title} />
              </div>
              <div className={styles.info}>
                <span className={styles.trackTitle}>{track.title}</span>
                <span className={styles.trackArtist}>{track.artist}</span>
              </div>
              <span className={`${styles.arrow} ${arrowClass}`}>{arrow}</span>
              <span className={styles.weeks}>{track.weeks} нед.</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}