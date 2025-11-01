import { Image } from '@components';
import styles from './Header.module.css';

export const Header = ({ info }) => {

  return (
    <div className={styles.header}>
      <section>
        <p className={styles.title}>{info.name}</p>
        <div className={styles.infoWrapper}>
          <div className={styles.infoRow}>
            <span className={styles.label} style={{ marginTop: '11px' }}>
              Rarity:
            </span>
            <span
              className={styles.rarity}
              style={{ backgroundColor: info.rarity.color }}
            >
              {info.rarity.name} {info.isGatcha ? `(${info.rarity.rate})` : ''}
            </span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Type:</span>
            <span className={styles.value}>{info.type.name}</span>
          </div>
          {info.baseDMG && (
            <div className={styles.infoRow}>
              <span className={styles.label}>Base DMG:</span>
              <span className={styles.value}>{info.baseDMG}</span>
            </div>
          )}
          {info.perStat && (
            <div className={styles.infoRow}>
              <span className={styles.label}>Per Stat:</span>
              <span className={styles.value}>{info.perStat}</span>
            </div>
          )}
          {info.damageType && (
            <div className={styles.infoRow}>
              <span className={styles.label}>DMG Type:</span>
              <span className={styles.value}>{info.damageType.name}</span>
            </div>
          )}
        </div>
      </section>
      <section className={styles.imageWrapper}>
        <Image alt={info.name} src={info.attachment} />
      </section>
    </div>
  );
};
