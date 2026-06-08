import useCityLights from '../../hooks/useCityLights';
import useParallaxScroll from '../../hooks/useParallaxScroll';
import styles from './BackgroundEffects.module.css';

const blobs = [
  { color: 'var(--accent-neon-pink)', size: 600, top: -200, left: -100, speed: 0.08 },
  { color: 'var(--accent-electric-blue)', size: 500, bottom: -150, right: -100, speed: 0.05 },
  { color: 'var(--accent-purple)', size: 400, top: '50%', left: '50%', speed: 0.12 },
  { color: 'var(--accent-acid-green)', size: 350, bottom: '30%', left: '5%', speed: 0.03 },
];

export default function BackgroundEffects() {
  const lights = useCityLights(100);
  const scrollY = useParallaxScroll();

  return (
    <>
      <div className={styles.noise} />
      <div className={styles.blobs}>
        {blobs.map((b, i) => (
          <div
            key={i}
            className={styles.blob}
            style={{
              width: b.size, height: b.size, background: b.color,
              top: typeof b.top === 'number' ? b.top + scrollY * b.speed : b.top,
              left: typeof b.left === 'number' ? b.left + scrollY * b.speed * 0.5 : b.left,
              bottom: typeof b.bottom === 'number' ? b.bottom - scrollY * b.speed : b.bottom,
              right: typeof b.right === 'number' ? b.right - scrollY * b.speed * 0.5 : b.right,
              animationDelay: `${i * -5}s`, animationDuration: '25s',
            }}
          />
        ))}
      </div>
      <div className={styles.cityLights} style={{ transform: `translateY(${scrollY * 0.015}px)` }}>
        {lights.map((light, i) => (
          <div key={i} className={styles.light}
            style={{
              left: light.left, top: light.top, animationDelay: light.delay,
              animationDuration: light.duration, width: light.size, height: light.size,
            }}
          />
        ))}
      </div>
      <div className={styles.rain} style={{ transform: `translateY(${scrollY * 0.008}px)` }} />
    </>
  );
}