import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './StreetVoice.module.css';

export default function StreetVoice({ items }) {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Голос улиц</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.number}>0{i + 1}</div>
            <p className={styles.text}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}