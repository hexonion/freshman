import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './LabelArtists.module.css';

export default function LabelArtists({ artists }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Артисты лейбла</h2>
      <div className={styles.grid}>
        {artists.map((artist, i) => (
          <div key={artist.id} className={styles.card} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={styles.photo}>
              <img src={artist.photo} alt={artist.name} />
            </div>
            <div className={styles.name}>{artist.name}</div>
            <div className={styles.genre}>{artist.genre}</div>
            <p className={styles.desc}>{artist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}