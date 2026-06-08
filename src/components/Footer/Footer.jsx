import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <span className={styles.brand}>FRESHMAN MEDIA GROUP</span>
          <span>Версия сайта: fmg 1.0</span>
        </div>
        <div className={styles.col}>
          <span className={styles.label}>Контакты</span>
          <span>10-80-00</span>
          <span>freshman@los-santos.sa</span>
        </div>
        <div className={styles.col}>
          <span className={styles.label}>Подразделения</span>
          <span>#FRESHMAN — журнал</span>
          <span>OLYMPIC SOUND — лейбл</span>
          <span>Sanboard — чарты</span>
        </div>
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} FRESHMAN MEDIA GROUP. Прямиком из Лос-Сантоса. От артистов — артистам. © Все права защищены.
      </div>
    </footer>
  );
}