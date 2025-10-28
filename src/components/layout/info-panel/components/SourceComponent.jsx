import styles from '../InfoPanel.module.css';

export const SourceComponent = ({ info }) => {
  return (
    <>
      <div className={styles.headerText}>
        <p>Source</p>
      </div>
      <section className={styles.sourceWrapper}>
        {info.sources.length ? (
          <div className={'grid grid-cols-3 gap-5'}>
            {info.sources.map((source) => {
              return (
                <div
                  className={styles.sourceItem}
                  key={`detail-source-${source.name}-${source.id}`}
                  title={source.name}
                >
                  <div className={styles.sourceItemImageWrapper}>
                    <img alt={source.name} src={source.image} />
                  </div>
                  <p>{source.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.sourceItem}>Unobtainable</div>
        )}
      </section>
    </>
  )
};