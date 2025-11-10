import styles from '../Header.module.css';

export const Location = ({ locations }) => {
  if (!locations) return null;
  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>Location:</span>
      <span className={styles.value}>{locations.map((location) => location.name).join(', ')}</span>
    </div>
  );
};
