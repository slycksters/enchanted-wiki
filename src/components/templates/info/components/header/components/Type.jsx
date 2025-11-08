import styles from '../Header.module.css';

export const Type = ({ info }) => {
  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>Type:</span>
      <span className={styles.value}>
        {info.subType ? info.subType.name : info.type.name}
      </span>
    </div>
  );
};
