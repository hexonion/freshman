import { useRef } from 'react';
import useMouseGlow from '../../hooks/useMouseGlow';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Sticker from '../Sticker/Sticker';
import styles from './TrackOfWeek.module.css';

export default function TrackOfWeek({ track }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  useMouseGlow(glowRef, cardRef);
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>САМЫЙ ОЖИДАЕМЫЙ РЕЛИЗ</h2>
      <div ref={cardRef} className={styles.card}>
        <div ref={glowRef} className={styles.glow} />
        <Sticker type="hot" />
        <div className={styles.layout}>
          <div className={styles.cover}>
            <img src={track.cover} alt="Обложка" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{track.title}</div>
            <a href={track.artistUrl} target="_blank" rel="noopener noreferrer" className={styles.artist}>
              {track.artist}
            </a>
            <div className={styles.meta}>
              <span>Лейбл: {track.label}</span>
              <span>Продюсер: {track.producer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}