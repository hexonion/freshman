import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './LabelStudio.module.css';

export default function LabelStudio({ studio }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Студия</h2>
      <div className={styles.card}>
        <p className={styles.slogan}>«{studio.slogan}»</p>
        <div className={styles.services}>
          {studio.services.map((s, i) => (
            <span key={i} className={styles.service}>{s}</span>
          ))}
        </div>
        <div className={styles.equipment}>
          <span className={styles.eqLabel}>Оборудование:</span>
          <span className={styles.eqText}>{studio.equipment}</span>
        </div>
      </div>
    </div>
  );
}