import styles from '../Header.module.css';

export const Inhabitants = ({ inhabitants }) => {
  if (!inhabitants?.length) return null;

  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>Inhabitants Count:</span>
      <span className={styles.value}>
        {inhabitants.length}
      </span>
    </div>
  );
};