import styles from './Header.module.css';

export const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <section>
        <p className={styles.title}>{info.name}</p>
        <div className={styles.infoWrapper}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Rarity:</span>
            <span style={{ color: info.rarity.color }}>
              {info.rarity.name} {info.isGatcha ? `(${info.rarity.rate})` : ''}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Type:</span>
            <span className={styles.value}>{info.type.name}</span>
          </div>
        </div>
      </section>
      <section className={styles.imageWrapper}>
        <img alt={info.name} src={info.attachment} />
      </section>
    </div>
  );
};
