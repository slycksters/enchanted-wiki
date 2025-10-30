import styles from './InfoPanel.module.css';

export const InfoPanel = ({}) => {
  return (
    <>
      {false && <div className={styles.overlay}></div>}

      <div className={styles.infoPanelWrapper}>{/* Empty for now */}</div>
    </>
  );
};
