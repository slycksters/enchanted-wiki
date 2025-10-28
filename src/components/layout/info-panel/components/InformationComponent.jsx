import styles from '../InfoPanel.module.css';

export const InformationComponent = ({ info }) => {
  return (
    <>
      <div className={styles.headerText}>
        <p>Information</p>
      </div>
      <section className={styles.infoWrapper}>
        <div className={styles.infoRow}>
          <p>Name:</p>
          <p>{info.name}</p>
        </div>
        <div className={styles.infoRow}>
          <p>Type:</p>
          <p>{info.type.name}</p>
        </div>
        <div className={styles.infoRow}>
          <p>Rarity:</p>
          <p>
            {info.rarity.name} ({info.rarity.rate})
          </p>
        </div>
      </section>
      <section className={styles.descriptionRow}>
        <p>Description:</p>
        <p>{info.descriptions[0]}</p>
      </section>
    </>
  );
};
