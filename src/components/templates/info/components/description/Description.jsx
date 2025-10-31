import styles from './Description.module.css';

export const Description = ({ info }) => {
  return (
    <section className={styles.description}>
      <div className={'row'}>
        <div className={'col col-12 col-md-12 col-lg-9'}>
          <h4 style={{ color: 'var(--enchanted-text-primary)' }}>
            Description:
          </h4>
          <div dangerouslySetInnerHTML={{ __html: info.description }} />
        </div>
      </div>
    </section>
  );
};
