import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './HallOfFame.module.css';

export default function HallOfFame({ items }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Зал славы</h2>
      <p className={styles.desc}>Номинанты, которые остаются здесь навсегда.</p>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={item.id} className={styles.card} style={{ transitionDelay: `${i * 0.06}s` }}>
            <div className={styles.photo}>
              <img src={item.photo} alt={item.name} />
            </div>
            <div className={styles.nomination}>{item.nomination}</div>
            <div className={styles.name}>{item.name}</div>
            <p className={styles.descText}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}