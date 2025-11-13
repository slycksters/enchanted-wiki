import { formatDisplayName, formatNumberWithCommas } from '@helpers';
import styles from '../Header.module.css';

export const Stats = ({ info }) => {
  return (
    info.stats &&
    Object.entries(info.stats).map((stat) => (
      <div key={`info-header-stat-${stat}`} className={styles.infoRow}>
        <span className={styles.label}>{formatDisplayName(stat[0])}:</span>
        <span className={styles.value}>{formatNumberWithCommas(stat[1])}</span>
      </div>
    ))
  );
};
