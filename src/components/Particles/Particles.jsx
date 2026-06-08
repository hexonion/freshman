import { useMemo } from 'react';
import styles from './Particles.module.css';

export default function Particles({ count = 50, color = 'var(--accent-gold)', speed = 20 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * speed + 's',
      duration: speed * 0.5 + Math.random() * speed + 's',
      size: 1 + Math.random() * 2 + 'px',
      opacity: 0.2 + Math.random() * 0.4,
    })), [count, speed]);

  return (
    <div className={styles.container}>
      {particles.map(p => (
        <div key={p.id} className={styles.particle}
          style={{
            left: p.left, animationDelay: p.delay, animationDuration: p.duration,
            width: p.size, height: p.size, opacity: p.opacity, background: color,
          }}
        />
      ))}
    </div>
  );
}