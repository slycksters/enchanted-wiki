import { formatNumberWithCommas } from '@helpers';
import styles from '../Header.module.css';

export const Level = ({ info }) => {
  return (
    info.level && (
      <div className={styles.infoRow}>
        <span className={styles.label}>Level:</span>
        <span className={styles.value}>{formatNumberWithCommas(info.level)}</span>
      </div>
    )
  );
};
