import styles from './Sticker.module.css';

export default function Sticker({ type, text }) {
  if (!type) return null;
  return (
    <div className={`${styles.sticker} ${styles[type] || ''}`}>
      {text || type.toUpperCase()}
    </div>
  );
}