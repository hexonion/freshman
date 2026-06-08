import { useRef } from 'react';
import useMouseGlow from '../../hooks/useMouseGlow';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Sticker from '../Sticker/Sticker';
import styles from './Interview.module.css';

export default function Interview({ data }) {
  const blockRef = useRef(null);
  const glowRef = useRef(null);
  useMouseGlow(glowRef, blockRef);
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <div ref={ref} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.heading}>Интервью</h2>
      <div ref={blockRef} className={styles.block}>
        <div ref={glowRef} className={styles.glow} />
        <Sticker type="exclusive" />
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <img src={data.avatar} alt={data.name} />
          </div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.role}>{data.role}</div>
        </div>
        <div className={styles.content}>
          {data.qa.map((item, i) => (
            <div key={i} className={styles.qa}>
              <div className={styles.question}>{item.q}</div>
              <div className={styles.answer}>{item.a}</div>
            </div>
          ))}
          <div className={styles.note} dangerouslySetInnerHTML={{ __html: data.blogNote }} />
        </div>
      </div>
    </div>
  );
}