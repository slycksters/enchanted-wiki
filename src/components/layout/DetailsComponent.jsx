import styles from './styles.module.css';

export const DetailsComponent = ({ info }) => {
  if (!info) return <div></div>;

  return (
    <div className={styles.detailWrapper}>
      {/* Image */}
      <div className={styles.detailInfoHeader}>
        <p>Image</p>
      </div>
      <section className={styles.detailImageWrapper}>
        <img alt={info.name} src={info.image} />
      </section>

      {/* Basic informations */}
      <div className={styles.detailInfoHeader}>
        <p>Info</p>
      </div>
      <section className={styles.detailInfo}>
        <div className={styles.infoRow}>
          <p className={styles.label}>Name:</p>
          <p>{info.name}</p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.label}>Type:</p>
          <p>{info.type?.name}</p>
        </div>
        <div className={styles.infoRow}>
          <p className={styles.label}>Rarity:</p>
          <p>
            {info.rarity.name} ({info.rarity.rate})
          </p>
        </div>
      </section>
      <section className={styles.detailDescription}>
        <p>Description:</p>
        <p>{info.descriptions[0]}</p>
      </section>

      {/* Source informations */}
      <section className={styles.detailSource}>
        <div className={styles.detailInfoHeader}>
          <p>Source</p>
        </div>

        {info.sources.length ? (
          <div className={'grid grid-cols-3 gap-5'}>
            {info.sources.map((source) => {
              return (
                <div
                  className={styles.detailSourceItem}
                  key={`detail-source-${source.name}-${source.id}`}
                  title={source.name}
                >
                  <div className={styles.detailSourceItemImg}>
                    <img alt={source.name} src={source.image} />
                  </div>
                  <p>{source.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.detailSourceItem}>Unobtainable</div>
        )}
      </section>
    </div>
  );
};
