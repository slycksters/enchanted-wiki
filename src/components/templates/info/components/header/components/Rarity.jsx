import { getContrastingTextColor } from '@helpers';
import styles from '../Header.module.css';

export const Rarity = ({ info }) => {
  return (
    info.rarity && (
      <div className={styles.infoRow}>
        <span className={styles.label} style={{ marginTop: '11px' }}>
          Rarity:
        </span>
        <span
          className={styles.rarity}
          style={{
            backgroundColor: info.rarity.color,
            color: getContrastingTextColor(info.rarity.color),
          }}
        >
          {info.rarity.name} {info.isGatcha ? `(${info.rarity.rate})` : ''}
        </span>
      </div>
    )
  );
};
